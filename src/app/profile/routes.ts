import { Routes } from '@angular/router';
import { ProfileFormPage } from './page/profile-form-page/profile-form-page';
import { ProfileRoot } from './page/profile-root/profile-root';
import { ProfileViewPage } from './page/profile-view-page/profile-view-page';

export default [
  {
    path: '',
    component: ProfileRoot,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'view', component: ProfileViewPage },
      { path: 'form', component: ProfileFormPage },
    ],
  },
] as Routes;
