import { Routes } from '@angular/router';
import { ListingsPage } from './listings-page/listings-page';
import { ListingDetailPage } from './listing-detail-page/listing-detail-page'; // Assuming this component is defined elsewhere
import { ContactPage } from './contact-page/contact-page';
import { EditListingPage } from './edit-listing-page/edit-listing-page';

export const routes: Routes = [
    { path: 'listings', component: ListingsPage, pathMatch: 'full' },
    { path: 'listings/:id', component: ListingDetailPage }, // Assuming ListingDetailPage is defined elsewhere
    { path: 'contact/:id', component: ContactPage }, 
    { path: 'edit-listing/:id', component: EditListingPage } // Default route
     { path: 'my-listings', component: EditListingPage } /
];

// listing-detail-apge
/// contact-page
//  my-listings-page
// new-listing-page
// edit-listing-page
