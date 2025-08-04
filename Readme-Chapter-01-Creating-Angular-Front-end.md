- Step-01-Setup CLI
    ```
    npm install -g @angular/cli  
    ```
- Step-02-Create a new Angular project
    ```
    ng new buy-and-sell
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? (Use arrow keys): css

    ```
- Step-03-CD into the project directory and start the Angular project
    ```
    cd buy-and-sell/
    ```
- Step-04-Create a new component
    ```
    ng generate component listings-page
    ```
- Step-05-Modify the `app.component.html` to include the new component
    ```
    add the following line to app.component.html
    import { ListingsPage } from './listings-page/listings-page';

     imports: [RouterOutlet, ListingsPage],
    add the following line to app.component.html
    ```
    ```html
    <app-listings-page></app-listings-page>
    ```
- Step-06-Run the Angular application

 ```
Components
ng generate component listings-page  /listings-page -created
ng generate component listing-detail-page  /listings/:id -created
ng generate component contact-page    /contact/:id -created
ng generate component edit-listing-page  /edit-listing/:id  -created
ng generate component my-listings-page  /my-listings 
ng generate component new-listing-page  /new-listing
```





   
    This command creates a new component named `listings-detail-page` in the `buy-and-sell/src/app/listings-detail-page` directory.