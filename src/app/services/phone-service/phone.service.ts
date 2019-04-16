import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Configuration} from '../configuration/configuration.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private readonly actionUrl: string;

  constructor(private httpClient: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.apiUrl;
  }

  public getAll<T>(): Observable<T> {
    return this.httpClient.get<T>(this.actionUrl);
  }

  public getSingle<T>(id: number): Observable<T> {
    return this.httpClient.get<T>(this.actionUrl + id);
  }

  public add<T>(itemName: string): Observable<T> {
    const toAdd = { ItemName: itemName };

    return this.httpClient.post<T>(this.actionUrl, toAdd);
  }

  public update<T>(id: number, itemToUpdate: any): Observable<T> {
    return this.httpClient
      .put<T>(this.actionUrl + id, itemToUpdate);
  }

  public delete<T>(id: number): Observable<T> {
    return this.httpClient.delete<T>(this.actionUrl + id);
  }

}

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    return next.handle(req);
  }
}
