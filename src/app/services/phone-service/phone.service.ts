import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Configuration} from '../configuration/configuration.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private readonly phonesUrl: string;
  private readonly brandsUrl: string;
  private readonly modelsUrl: string;
  private readonly pageUrl: string;
  private readonly pageSearchedUrl: string;
  private readonly phonesComparisionUrl: string;


  constructor(private httpClient: HttpClient, private configuration: Configuration) {
    this.phonesUrl = configuration.apiUrl + 'phones/';
    this.pageUrl = this.phonesUrl + 'page/';
    this.pageSearchedUrl = this.phonesUrl + 'page/search';
    this.brandsUrl = this.phonesUrl + 'brands/';
    this.modelsUrl = this.phonesUrl + 'models/';
    this.phonesComparisionUrl = this.phonesUrl + 'comparison/';
  }

  public getAllPhones<T>(): Observable<T> {
    return this.httpClient.get<T>(this.phonesUrl);
  }

  public getPhonePage<T>(page: number, size: number): Observable<T> {
    const params = new HttpParams().set('page', String(page)).set('size', String(size));
    return this.httpClient.get<T>(this.pageUrl, {params});
  }

  public getPhonePageSearched<T>(searchInput: string, page: number, size: number): Observable<T> {
    const params = new HttpParams().set('searchInput', searchInput).set('page', String(page)).set('size', String(size));
    return this.httpClient.get<T>(this.pageSearchedUrl, {params});
  }

  public getAllBrands(): Observable<string> {
    return this.httpClient.get<string>(this.brandsUrl);
  }

  public getModelsByBrand(brand: string): Observable<string> {
    const params = new HttpParams().set('brand', brand);
    return this.httpClient.get<string>(this.modelsUrl, {params});
  }

  public getPhone<T>(id: number): Observable<T> {
    return this.httpClient.get<T>(this.phonesUrl + id);
  }

  public getPhoneByBrandAndModel<T>(brand: string, model: string): Observable<T> {
    const params = new HttpParams().set('brand', brand).set('model', model);
    return this.httpClient.get<T>(this.phonesComparisionUrl, {params});
  }

  public add<T>(itemName: string): Observable<T> {
    const toAdd = {ItemName: itemName};

    return this.httpClient.post<T>(this.phonesUrl, toAdd);
  }

  public update<T>(id: number, itemToUpdate: any): Observable<T> {
    return this.httpClient
      .put<T>(this.phonesUrl + id, itemToUpdate);
  }

  public delete<T>(id: number): Observable<T> {
    return this.httpClient.delete<T>(this.phonesUrl + id);
  }

}

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
    }

    req = req.clone({headers: req.headers.set('Accept', 'application/json')});
    return next.handle(req);
  }
}
