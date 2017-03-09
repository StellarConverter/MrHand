import { Component } from '@angular/core';
import { HandyService } from './handy.service';
import { Person } from './classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HandyService]
})

export class AppComponent
{
  title = 'here comes mister hand';
  people: Person[] = [];

  constructor(private hs:HandyService)
  {
    ;
  }

  public click1()
  {
    let response = this.hs.Thing1();
    alert(response);
  }

  public Click2()
  {
    this.people = [];
    this.hs.getAll().subscribe(
      rec=>this.people = rec,
      fail=>alert(fail),
      ()=>alert("done loading the stuff")   );
  }

}