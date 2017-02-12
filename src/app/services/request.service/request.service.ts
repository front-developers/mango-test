import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RequestService {
  constructor(
    public _http: Http
  ) {}

  get(url: string) {
    return this._http.get(url);
  }
}
