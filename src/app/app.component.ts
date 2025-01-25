import { Component } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  title = 'cms';
  

  selectedFeature: string = 'documents';


  switchView(feature: string) {
    this.selectedFeature = feature;
  }
}