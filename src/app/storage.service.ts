import { Injectable } from '@angular/core';

@Injectable()
export class StorageService
{
  constructor()
  {
  }


//LOLCAT -- this unit needs to be changed to use HTML Local Storage

    public LoadURLs() : string[]
    {

      let str : string[] = ['aaaa','bbbb','ccccc'];
      return str;
    }  


    public SaveURLs(urls:string[])
    {
      ;
    }      
}
