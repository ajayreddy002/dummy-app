import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DetailsComponent } from '../components/details/details.component';
import { SignupComponent } from '../components/signup/signup.component';
import { GetstartedComponent } from '../components/getstarted/getstarted.component';
import { RegisterComponent } from '../components/register/register.component';
import { TakeloanComponent } from '../components/takeloan/takeloan.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        // component: HomePage,
        redirectTo: 'getstarted'
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
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'takeloan',
        component: TakeloanComponent
      },
    ])
  ],
  declarations: [
    HomePage,
    GetstartedComponent,
    SignupComponent,
    DetailsComponent,
    RegisterComponent,
    TakeloanComponent
  ]
})
export class HomePageModule {}
