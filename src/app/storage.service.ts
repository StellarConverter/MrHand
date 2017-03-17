import { Injectable } from '@angular/core';

@Injectable()
export class StorageService
{
  constructor()
  {
  }


    public LoadURLs() : string[]
    {
      let str = localStorage.getItem("urls");
      return JSON.parse(str);
    }  


    public SaveURLs(urls:string[])
    {
      localStorage.setItem("urls", JSON.stringify(urls));
    }      
}
