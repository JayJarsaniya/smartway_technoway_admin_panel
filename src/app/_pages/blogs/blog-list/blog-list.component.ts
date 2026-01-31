import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService, Blog, BlogFilter } from '../../../services/api';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  loading: boolean = false;
  filter: BlogFilter = {};
  blogToDelete: Blog | null = null;
  toastMessage: string = '';
  toastType: 'success' | 'error' | '' = '';

  get isFilterApplied(): boolean {
    return !!(this.filter.title || this.filter.isPublished !== undefined);
  }

  get activeFilterCount(): number {
    let count = 0;
    if (this.filter.title) count++;
    if (this.filter.isPublished !== undefined) count++;
    return count;
  }

  constructor(
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.loading = true;
    this.blogService.getBlogs(this.filter).subscribe({
      next: (response) => {
        if (response.success) {
          this.blogs = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        this.showToast('Error loading blogs', 'error');
        this.loading = false;
      }
    });
  }

  applyFilter(): void {
    this.loadBlogs();
  }

  resetFilter(): void {
    this.filter = {};
    this.loadBlogs();
  }

  addNewBlog(): void {
    this.router.navigate(['/blogs/add-blog']);
  }

  editBlog(blog: Blog): void {
    console.log('Edit blog clicked:', blog);
    console.log('Blog ID:', blog._id, 'Slug:', blog.slug);
    // Use slug for editing since backend might expect slug
    this.router.navigate(['/blogs/add-blog', blog.slug]);
  }

  deleteBlog(blog: Blog): void {
    this.blogToDelete = blog;
  }

  confirmDelete(): void {
    if (this.blogToDelete) {
      this.blogService.deleteBlog(this.blogToDelete._id).subscribe({
        next: () => {
          this.showToast('Blog deleted successfully', 'success');
          this.loadBlogs();
          this.blogToDelete = null;
        },
        error: () => {
          this.showToast('Error deleting blog', 'error');
        }
      });
    }
  }

  cancelDelete(): void {
    this.blogToDelete = null;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  truncateText(text: string, limit: number = 100): string {
    const strippedText = text.replace(/<[^>]*>/g, '');
    return strippedText.length > limit ? strippedText.substring(0, limit) + '...' : strippedText;
  }

  showToast(message: string, type: 'success' | 'error'): void {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => {
      this.toastMessage = '';
      this.toastType = '';
    }, 3000);
  }
}
