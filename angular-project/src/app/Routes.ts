import { Routes } from "@angular/router"
import { AboutPageComponent } from "./pages/about-page/about-page.component"
import { ContactPageComponent } from "./pages/contact-page/contact-page.component"
import { CounterPageComponent } from "./pages/counter-page/counter-page.component"
import { HomePageComponent } from "./pages/home-page/home-page.component"
import { PostsPageComponent } from "./pages/posts-page/posts-page.component"
export const appRoutes: Routes = [
    {path: '', component: HomePageComponent },
    {path: 'posts', component: PostsPageComponent },
    {path: 'about', component: AboutPageComponent },
    {path: 'counter', component: CounterPageComponent },
    {path: 'contact', component: ContactPageComponent }
]