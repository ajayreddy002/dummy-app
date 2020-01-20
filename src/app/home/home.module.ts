import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DetailsComponent } from '../components/details/details.component';
import { SignupComponent } from '../components/signup/signup.component';
import { GetstartedComponent } from '../components/getstarted/getstarted.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'getstarted',
        component: GetstartedComponent
      },
    ])
  ],
  declarations: [
    HomePage,
    GetstartedComponent,
    SignupComponent,
    DetailsComponent
  ]
})
export class HomePageModule {}
