import { Component } from '@angular/core';
import { HandyService } from './handy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HandyService]
})

export class AppComponent
{
  title = 'here comes mister hand';

  constructor(private hs:HandyService)
  {
    ;
  }

  public click1()
  {
    let response = this.hs.Thing1();
    alert(response);
  }

}