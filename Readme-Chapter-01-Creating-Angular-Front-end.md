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
    ```html
    <app-listings-page></app-listings-page>
    ```
- Step-06-Run the Angular application