import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_pages/login/login.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AfterloginComponent,
    children:[
      { 
        path: 'html', 
        loadChildren: () => import('./_pages/html/html.module').then(m => m.HtmlModule) 
      },
      { 
        path: 'dashboard', 
        loadChildren: () => import('./_pages/dashboard/dashboard.module').then(m => m.DashboardModule) 
      },
      { 
        path: 'client-list', 
        loadChildren: () => import('./_pages/client-list/client-list.module').then(m => m.ClientListModule) 
      },
      { 
        path: 'review-list', 
        loadChildren: () => import('./_pages/review-list/review-list.module').then(m => m.ReviewListModule) 
      },
      { 
        path: 'subscribers-list', 
        loadChildren: () => import('./_pages/subscribers-list/subscribers-list.module').then(m => m.SubscribersListModule) 
      },
      { 
        path: 'blogs/blog-list', 
        loadChildren: () => import('./_pages/blogs/blog-list/blog-list.module').then(m => m.BlogListModule) 
      },
      {
        path: 'blogs/add-blog', 
        loadChildren: () => import('./_pages/blogs/add-blog/add-blog.module').then(m => m.AddBlogModule) 
      },
      { 
        path: 'blogs/blog-detail/:id', 
        loadChildren: () => import('./_pages/blogs/blog-detail/blog-detail.module').then(m => m.BlogDetailModule) 
      },
      {
        path: 'blogs/blog-category-list',
        loadChildren: () => import('./_pages/blogs/blog-category-list/blog-category-list.module').then(m => m.BlogCategoryListModule)
      },
      { 
        path: 'blogs/blog-tag-list', 
        loadChildren: () => import('./_pages/blogs/blog-tag-list/blog-tag-list.module').then(m => m.BlogTagListModule) 
      },
      { 
        path: 'blogs/blog-comment-list', 
        loadChildren: () => import('./_pages/blogs/blog-comment-list/blog-comment-list.module').then(m => m.BlogCommentListModule) 
      },
      { 
        path: 'services/service-list', 
        loadChildren: () => import('./_pages/services/service-list/service-list.module').then(m => m.ServiceListModule) 
      },
      {
        path: 'services/add-service', 
        loadChildren: () => import('./_pages/services/add-service/add-service.module').then(m => m.AddServiceModule) 
      },
      { 
        path: 'services/service-detail/:id', 
        loadChildren: () => import('./_pages/services/service-detail/service-detail.module').then(m => m.ServiceDetailModule) 
      },
      { 
        path: 'skills/skill-list', 
        loadChildren: () => import('./_pages/skills/skill-list/skill-list.module').then(m => m.SkillListModule) 
      },
      {
        path: 'skills/add-skill', 
        loadChildren: () => import('./_pages/skills/add-skill/add-skill.module').then(m => m.AddSkillModule) 
      },
      { 
        path: 'portfolio/portfolio-list', 
        loadChildren: () => import('./_pages/portfolio/portfolio-list/portfolio-list.module').then(m => m.PortfolioListModule) 
      },
      { 
        path: 'portfolio/add-portfolio', 
        loadChildren: () => import('./_pages/portfolio/add-portfolio/add-portfolio.module').then(m => m.AddPortfolioModule) 
      },
      { 
        path: 'portfolio/portfolio-detail/:id', 
        loadChildren: () => import('./_pages/portfolio/portfolio-detail/portfolio-detail.module').then(m => m.PortfolioDetailModule) 
      },
      { 
        path: 'portfolio/portfolio-category-list', 
        loadChildren: () => import('./_pages/portfolio/portfolio-category-list/portfolio-category-list.module').then(m => m.PortfolioCategoryListModule) 
      },
      { 
        path: 'portfolio/portfolio-tag-list', 
        loadChildren: () => import('./_pages/portfolio/portfolio-tag-list/portfolio-tag-list.module').then(m => m.PortfolioTagListModule) 
      },
      { path: 'case-studies/case-studies-details/:id', 
        loadChildren: () => import('./_pages/case-study/case-studies-details/case-studies-details.module').then(m => m.CaseStudiesDetailsModule) 
      },
      { path: 'case-studies/case-studies-list', 
        loadChildren: () => import('./_pages/case-study/case-studies-list/case-studies-list.module').then(m => m.CaseStudiesListModule) 
      },
      { path: 'case-studies/add-case-studies', 
        loadChildren: () => import('./_pages/case-study/add-case-studies/add-case-studies.module').then(m => m.AddCaseStudiesModule) 
      },
      { 
        path: 'career/job-opening-list', 
        loadChildren: () => import('./_pages/career/job-opening-list/job-opening-list.module').then(m => m.JobOpeningListModule) 
      },
      { 
        path: 'career/career-enquiry-list', 
        loadChildren: () => import('./_pages/career/career-enquiry-list/career-enquiry-list.module').then(m => m.CareerEnquiryListModule) 
      },
      { 
        path: 'events/event-list', 
        loadChildren: () => import('./_pages/events/event-list/event-list.module').then(m => m.EventListModule) 
      },
      { 
        path: 'events/add-event', 
        loadChildren: () => import('./_pages/events/add-event/add-event.module').then(m => m.AddEventModule) 
      },
      { 
        path: 'events/event-detail/:id', 
        loadChildren: () => import('./_pages/events/event-detail/event-detail.module').then(m => m.EventDetailModule) 
      },
      { 
        path: 'enquiries/service-enquiry-list', 
        loadChildren: () => import('./_pages/enquiries/service-enquiry-list/service-enquiry-list.module').then(m => m.ServiceEnquiryListModule) 
      },
      { 
        path: 'enquiries/industry-enquiry-list', 
        loadChildren: () => import('./_pages/enquiries/industry-enquiry-list/industry-enquiry-list.module').then(m => m.IndustryEnquiryListModule) 
      },
      { path: 'enquiries/case-study-enquiry-list', 
        loadChildren: () => import('./_pages/enquiries/case-study-enquiry-list/case-study-enquiry-list.module').then(m => m.CaseStudyEnquiryListModule) 
      },
      { 
        path: 'contact/setting-list', 
        loadChildren: () => import('./_pages/contact/setting-list/setting-list.module').then(m => m.SettingListModule) 
      },
      { 
        path: 'contact/user-enquiry-list', 
        loadChildren: () => import('./_pages/contact/user-enquiry-list/user-enquiry-list.module').then(m => m.UserEnquiryListModule) 
      },
      { 
        path: 'seo-page-list', 
        loadChildren: () => import('./_pages/seo-page-list/seo-page-list.module').then(m => m.SeoPageListModule) 
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
