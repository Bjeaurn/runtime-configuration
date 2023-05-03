import { Component, inject } from '@angular/core';
import { ConfigService } from './config/config.service';
import { APP_CONFIG } from './config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'runtime-cfg';

  constructor(private cfg: ConfigService) {
    const config = inject(APP_CONFIG);
    console.log(this.cfg.api);
    console.log(config);
  }
}
