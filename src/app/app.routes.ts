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
    {title: "NMR | Inicio", path:'home' , component: HeaderComponent},
    {title: "NMR | Sobre", path:'about' , component: AboutComponent},
    {title: "NMR | Clientes", path:'clients' , component: ClientsComponent},
    {title: "NMR | Planos", path:'pricing' , component: PricingComponent},
    {title: "NMR | Depoimentos", path:'testimonials' , component: TestimonialsComponent},
    {title: "NMR | Galeria", path:'gallery' , component: GalleryComponent},
    {title: "NMR | Serviços", path:'services' , component: ServicesComponent},
    {title: "NMR | Not Found", path:'**' , component: NotfoundComponent},

];
