import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [

    {title: "NMR | Home", path:'' , component: HeaderComponent},
    {title: "NMR | Home", path:'home' , component: HeaderComponent},
    {title: "NMR | About", path:'about' , component: AboutComponent},
    {title: "NMR | Client", path:'clients' , component: ClientsComponent},
    {title: "NMR | Pricing", path:'pricing' , component: PricingComponent},
    {title: "NMR | Testimonials", path:'testimonials' , component: TestimonialsComponent},
    {title: "NMR | Gallery", path:'gallery' , component: GalleryComponent},
    {title: "NMR | Services", path:'services' , component: ServicesComponent},
    {title: "NMR | Not Found", path:'**' , component: NotfoundComponent},

];
