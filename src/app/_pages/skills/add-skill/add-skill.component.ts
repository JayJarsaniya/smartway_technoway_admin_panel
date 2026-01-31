import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService, Skill } from '../../../services/api';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {
  skill: Partial<Skill> = {
    title: '',
    status: true
  };
  isEditMode = false;
  loading = false;
  selectedFile: File | null = null;
  toastMessage = '';
  toastType: 'success' | 'error' | '' = '';

  constructor(
    private skillService: SkillService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadSkill(id);
    }
  }

  loadSkill(id: string): void {
    this.loading = true;
    this.skillService.getSkillById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.skill = response.data;
        }
        this.loading = false;
      },
      error: () => {
        this.showToast('Error loading skill', 'error');
        this.loading = false;
      }
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    this.loading = true;
    
    const formData = new FormData();
    formData.append('title', this.skill.title || '');
    formData.append('status', this.skill.status?.toString() || 'true');
    
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    
    if (this.isEditMode) {
      this.skillService.updateSkill(this.skill._id!, formData).subscribe({
        next: () => {
          this.showToast('Skill updated successfully', 'success');
          setTimeout(() => this.router.navigate(['/skills/skill-list']), 1500);
        },
        error: () => {
          this.showToast('Error updating skill', 'error');
          this.loading = false;
        }
      });
    } else {
      this.skillService.createSkill(formData).subscribe({
        next: () => {
          this.showToast('Skill created successfully', 'success');
          setTimeout(() => this.router.navigate(['/skills/skill-list']), 1500);
        },
        error: () => {
          this.showToast('Error creating skill', 'error');
          this.loading = false;
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
}