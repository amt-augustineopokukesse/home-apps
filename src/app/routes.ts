import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ApplicationConfirmationComponent } from './application-confirmation/application-confirmation.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    },
    {
        path: 'confirmed',
        component: ApplicationConfirmationComponent,
        title: 'Confirmation Page'
    }
];

export default routeConfig;
