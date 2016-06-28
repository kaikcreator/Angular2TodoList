import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { Logger } from './shared/logger.service';

bootstrap(AppComponent,[Logger]);
