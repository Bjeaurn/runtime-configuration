import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, Config } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(@Inject(APP_CONFIG) private readonly config: Config) {}

  // Room here for specific implementations, like retrieving a specific service URL, combining data from the configuration into usuable data to be consumed, etc.
  // This keeps the API and usage of your configuration throughout your application centralized using this service.
  // Changes in your configuration should reflect in here, and other parts of the application shouldn't really notice any changes in most cases.
  get api() {
    return this.config.apiUrl;
  }
}
