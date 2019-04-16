import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Configuration {
  public serverUrl = 'http://localhost:8080/';
  public applicationUrl = 'phones/';
  public apiUrl = this.serverUrl + this.applicationUrl;
}
