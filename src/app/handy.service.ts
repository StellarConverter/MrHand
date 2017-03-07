import { Injectable } from '@angular/core';

@Injectable()
export class HandyService
{
    constructor() { }

    public Thing1() : string
    {
      return "hello this is the HAND service.  It is a nice day";
    }
}
