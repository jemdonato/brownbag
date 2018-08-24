import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DemoserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DemoserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DemoserviceProvider Provider');
  }

  getUsers(){
    return this.http.get('./assets/mock/getUser.json');
  }

}
