import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogService, Blog } from '../../../services/api';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  blogForm: Partial<Blog> = {
    title: '',
    content: '',
    isPublished: true
  };
  selectedFile: File | null = null;
  isEditMode: boolean = false;
  blogId: string | null = null;
  actualBlogId: string | null = null;
  toastMessage: string = '';
  toastType: 'success' | 'error' | '' = '';

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: false,
    height: '200px',
    minHeight: '0',
    placeholder: 'Enter text here...',
    translate: 'no',
    toolbarHiddenButtons: [['insertImage', 'insertVideo']]
  };

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.blogId = params['id'];
        this.loadBlog(params['id']);
      }
    });
  }

  loadBlog(id: string): void {
    this.blogService.getBlogBySlug(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.blogForm = response.data;
          this.actualBlogId = response.data._id;
          // Ensure isPublished is properly set as boolean
          this.blogForm.isPublished = response.data.isPublished === true;
          console.log('Loaded blog status:', this.blogForm.isPublished);
          this.displayExistingImage();
        }
      },
      error: (error) => {
        this.showToast('Error loading blog', 'error');
      }
    });
  }

  displayExistingImage(): void {
    if (this.blogForm.image) {
      setTimeout(() => {
        const preview = document.getElementById('file-image') as HTMLImageElement;
        if (preview && this.blogForm.image) {
          preview.src = this.blogForm.image;
          preview.classList.remove('hidden');
          const startDiv = document.getElementById('start');
          if (startDiv) startDiv.style.display = 'none';
        }
      }, 100);
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      const fileExtension = file.name.toLowerCase().split('.').pop();
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
      
      if (!allowedTypes.includes(file.type) || !allowedExtensions.includes(fileExtension || '')) {
        this.showToast('Only image files (JPG, PNG, GIF, WebP) are allowed', 'error');
        event.target.value = '';
        return;
      }
      
      console.log('Selected file:', file.name, 'Type:', file.type, 'Size:', file.size);
      this.selectedFile = file;
      
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const preview = document.getElementById('file-image') as HTMLImageElement;
        if (preview) {
          preview.src = e.target.result;
          preview.classList.remove('hidden');
          const startDiv = document.getElementById('start');
          if (startDiv) startDiv.style.display = 'none';
        }
      };
      reader.readAsDataURL(file);
    }
  }

  saveBlog(): void {
    if (!this.blogForm.title || !this.blogForm.content) {
      this.showToast('Please fill all required fields', 'error');
      return;
    }

    if (!this.selectedFile && !this.isEditMode) {
      this.showToast('Please select an image', 'error');
      return;
    }

    const formData = new FormData();
    formData.append('title', this.blogForm.title);
    formData.append('content', this.blogForm.content);
    formData.append('slug', this.blogService.generateSlug(this.blogForm.title));
    formData.append('isPublished', this.blogForm.isPublished?.toString() || 'true');
    
    if (this.selectedFile) {
      console.log('Appending file:', this.selectedFile.name, 'Type:', this.selectedFile.type);
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    // Log FormData contents
    console.log('FormData contents:');
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    if (this.isEditMode && this.actualBlogId) {
      this.blogService.updateBlog(this.actualBlogId, formData).subscribe({
        next: () => {
          this.showToast('Blog updated successfully', 'success');
          setTimeout(() => this.router.navigate(['/blogs/blog-list']), 1500);
        },
        error: (error) => {
          console.error('Update error:', error);
          this.showToast('Error updating blog', 'error');
        }
      });
    } else {
      this.blogService.createBlog(formData).subscribe({
        next: () => {
          this.showToast('Blog created successfully', 'success');
          setTimeout(() => this.router.navigate(['/blogs/blog-list']), 1500);
        },
        error: (error) => {
          console.error('Create error:', error);
          this.showToast('Error creating blog', 'error');
        }
      });
    }
  }

  showToast(message: string, type: 'success' | 'error'): void {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => {
      this.toastMessage = '';
      this.toastType = '';
    }, 3000);
  }

  goBack(): void {
    this.router.navigate(['/blogs/blog-list']);
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      // Chart.js code if needed
    });
  }
}
