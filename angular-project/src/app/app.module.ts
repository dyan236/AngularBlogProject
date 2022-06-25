import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './Routes';

import { AppComponent } from './app.component';
import { MenuBtnComponent } from './components/menu-btn/menu-btn.component';
import { NavComponent } from './components/nav/nav.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialsComponent } from './components/socials/socials.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBtnComponent,
    NavComponent,
    NavItemComponent,
    HomePageComponent,
    FooterComponent,
    SocialsComponent,
    PostsPageComponent,
    AboutPageComponent,
    CounterPageComponent,
    ContactPageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
