import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService, Skill, SkillFilter } from '../../../services/api';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  skills: Skill[] = [];
  loading: boolean = false;
  filter: SkillFilter = {};
  skillToDelete: Skill | null = null;
  toastMessage: string = '';
  toastType: 'success' | 'error' | '' = '';

  get isFilterApplied(): boolean {
    return !!(this.filter.title || this.filter.status !== undefined);
  }

  get activeFilterCount(): number {
    let count = 0;
    if (this.filter.title) count++;
    if (this.filter.status !== undefined) count++;
    return count;
  }

  constructor(
    private skillService: SkillService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    this.loading = true;
    this.skillService.getSkills(this.filter).subscribe({
      next: (response) => {
        if (response.success) {
          this.skills = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        this.showToast('Error loading skills', 'error');
        this.loading = false;
      }
    });
  }

  applyFilter(): void {
    this.loadSkills();
  }

  resetFilter(): void {
    this.filter = {};
    this.loadSkills();
  }

  addNewSkill(): void {
    this.router.navigate(['/skills/add-skill']);
  }

  editSkill(skill: Skill): void {
    this.router.navigate(['/skills/add-skill', skill._id]);
  }

  deleteSkill(skill: Skill): void {
    this.skillToDelete = skill;
  }

  confirmDelete(): void {
    if (this.skillToDelete) {
      this.skillService.deleteSkill(this.skillToDelete._id).subscribe({
        next: () => {
          this.showToast('Skill deleted successfully', 'success');
          this.loadSkills();
          this.skillToDelete = null;
        },
        error: () => {
          this.showToast('Error deleting skill', 'error');
        }
      });
    }
  }

  cancelDelete(): void {
    this.skillToDelete = null;
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

  showToast(message: string, type: 'success' | 'error'): void {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => {
      this.toastMessage = '';
      this.toastType = '';
    }, 3000);
  }
}