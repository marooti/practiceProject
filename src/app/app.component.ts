import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parctice-project';
  data='hello imran';
  getName(name:string,secondName:string){
    alert(name);
    alert(secondName);
  }
}
