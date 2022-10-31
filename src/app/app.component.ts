import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventApp';
  newName:string = "";
  // names:string[] = [
  //   "Fred", "Julie", "Sam", "Olivia", "Adam", "Jennifer"
  // ];
  
  user:User = {
    name:"cameron",
    age:26,
    favoriteColor:"blue"
    
  }
  displayEdit:boolean = false;

  // changeTitle(newTitle:string):void {
  //   this.title = newTitle
  // }

  // addName(){
  //   this.names.push(this.newName);
  // }

  toggleEdit() {
    this.displayEdit = !this.displayEdit;
  }
}


