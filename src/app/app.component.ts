import { Component } from '@angular/core';
import { HandyService } from './handy.service';
import { StorageService } from './storage.service';
import { Person } from './classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HandyService, StorageService]
})

export class AppComponent
{
  title = 'here comes mister hand';
  people: Person[] = [];
  urls:string[];

  constructor(private hs:HandyService, private sto:StorageService)
  {
    this.urls = sto.LoadURLs();
  }

  public Click2()
  {
    this.people = [];
    this.hs.getAll().subscribe(
      rec=>this.people = rec,
      fail=>alert(fail),
      ()=>alert("done loading the stuff")   );
  }

  public newURL()
  {

  }

  public HitIt(urlIndex:number)
  {
    alert(this.urls[urlIndex]);
  }


}