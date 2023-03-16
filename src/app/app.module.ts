import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavigComponent } from './units/navig/navig.component';
import { FooterComponent } from './units/footer/footer.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { SingleComponent } from './pages/single/single.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { NavComponent } from './units/nav/nav.component';
import { UpdateprofileComponent } from './pages/updateprofile/updateprofile.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { MessageComponent } from './pages/message/message.component';
import { CrushboxComponent } from './pages/crushbox/crushbox.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    SignupComponent,
    ProfileComponent,
    NavigComponent,
    FooterComponent,
    MainpageComponent,
    AboutComponent,
    ContactComponent,
    SingleComponent,
    SearchpageComponent,
    NavComponent,
    UpdateprofileComponent,
    NotificationComponent,
    MessageComponent,
CrushboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
