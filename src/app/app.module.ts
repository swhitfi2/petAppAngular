import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //added imports from the dependencies add toway data binding
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';//bootstrap css

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HttpClientModule } from '@angular/common/http';
import { PetService }  from './services/pet.services';
import { PetComponent } from './pet/pet.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
//import { HomeComponent } from './home/home.component';
//import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
