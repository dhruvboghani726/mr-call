import { Component } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mr';
  loading$ = this.loader.isLoading;
  constructor(
    public loader: LoaderService) {    
    }
}
