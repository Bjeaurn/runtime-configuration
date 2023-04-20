import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, Config } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(@Inject(APP_CONFIG) readonly config: Config) {}
}
