import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import {Form, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PersonsService} from './persons.service';
import {ProjectsService} from './projects.service';
import {HttpClientModule} from '@angular/common/http';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {AppRoutingModule} from './app-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { MyContentComponent } from './my-content/my-content.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
      UserDetailComponent,
      CreateUserComponent,
      MyContentComponent,
      RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PersonsService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
