import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, Config } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(@Inject(APP_CONFIG) private readonly config: Config) {}

  // Room here for specific implementations, like retrieving a specific service URL, combining data from the configuration into usuable data to be consumed, etc.
  get api() {
    return this.config.apiUrl;
  }
}
