import { Routes } from '@angular/router';
import { AssignmentRoot } from './assignment-root/assignment-root';
import { DynamicsSectionView } from './components/dynamics-section-view/dynamics-section-view';
import { DynamicsSectionForm } from './components/dynamics-section-form/dynamics-section-form';
// Import Components ที่เราสร้างไว้ใน folder pages

export default [
  {
    path: '',
    component: AssignmentRoot, // ตัวโครงหลัก (ที่มี <router-outlet>)
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' }, // เข้ามาเฉยๆ ให้เด้งไปหน้า view
      { path: 'view', component: DynamicsSectionView }, // หน้าแสดงผล
      { path: 'form', component: DynamicsSectionForm }, // หน้าฟอร์ม
    ],
  },
] as Routes;
