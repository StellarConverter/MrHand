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

  UrlHitterResultsStringGood:string = null;
  UrlHitterResultsStringBad:string = null;
  UrlHitterResultsStringWorking:string = null;

  theNewUrl:string=null;

  constructor(private hs:HandyService, private sto:StorageService)
  {
    this.urls = sto.LoadURLs();
    this.UrlHitterResultsStringGood="this is what success looks like";
  }

  public Click2()
  {
    this.people = [];
    this.hs.getAll().subscribe(
      rec=>this.people = rec,
      fail=>alert(fail),
      ()=>alert("done loading the stuff")   );
  }


//URL stuff with local storage wonderfulness
  public addURL()
  {
   this.urls.splice(0, 0, this.theNewUrl);
   this.sto.SaveURLs(this.urls);
  }

  public HitIt(urlIndex:number)
  {
    let url = this.urls[urlIndex];

    this.UrlHitterResultsStringGood = null;
    this.UrlHitterResultsStringBad = null;
    this.UrlHitterResultsStringWorking = "working...";

    this.hs.hitArbiraryURL(url).subscribe(
      rec=>this.UrlHitterResultsStringGood = rec,
      fail=>this.acceptYourFailure(fail) ,
      ()=>this.UrlHitterResultsStringWorking = "done OK"  );    

  }

  private acceptYourFailure(failString:string)
  {
      this.UrlHitterResultsStringBad = failString;
      this.UrlHitterResultsStringWorking = null;
  }

  public Delete(idx:number)
  {
    this.urls.splice(idx, 1);
    this.sto.SaveURLs(this.urls);
  }


}