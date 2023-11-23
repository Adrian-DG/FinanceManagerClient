import { Injectable,isDevMode } from '@angular/core';
import { environment as dev } from 'src/environment/environment.dev';
import { environment as prod } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseServiceService {

  abstract GetResource(): string;

  private readonly endpoint: string = '';

  constructor() { 
    const env = isDevMode() ? dev.api_url : prod.api_url;
    this.endpoint += `${env}/${this.GetResource()}`;
  }
}
