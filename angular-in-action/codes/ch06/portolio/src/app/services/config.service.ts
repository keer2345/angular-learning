import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _api: string;

  constructor() { }
  public static set(property, value) {
    this['_' + property] = value
  }
  public static get(property) {
    return this['_' + property]
  }
}
