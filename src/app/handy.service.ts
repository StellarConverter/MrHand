import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Person } from './classes';


@Injectable()
export class HandyService
{
  constructor(private http : Http)
  {
    ;
  }



   public hitArbiraryURL(url:string) : Observable<string>
   {
     let result = this.http
      .get(url, {headers: this.getHeaders()})
      .map(this.mapString)
      .catch(handleError);
      return result;
   
   }

  private mapString(response:Response):string
{
  return JSON.stringify(response);
}






  private baseUrl: string = 'http://swapi.co/api';

    public Thing1() : string
    {
      return "HUHBLEEEEAAAHHH -- hello this is the HAND service.  It is a nice day";
    }


//////below is the star wars sample stuff...........

  public getAll(): Observable<Person[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
      .map(mapPersons)
      .catch(handleError);
      return people$;
  }


//well this is a total copy-paste... what is it and why does it actualy work?
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }



}





////what the heck is this crap?   regular Javascript in my awesome typescript?   ugh..... heinous

function mapPersons(response:Response): Person[]{
   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toPerson)
}

function toPerson(r:any): Person{
  let person = <Person>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: r.mass,
    height: r.height,
  });
  console.log('Parsed person:', person);
  return person;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData:any){
 let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
 return parseInt(extractedId);
}





// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
//  let errorMsg = error.message || `fail!`
  let errorMsg = JSON.stringify(error);
  console.error(errorMsg);
  //alert(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
