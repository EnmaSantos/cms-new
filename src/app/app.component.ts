import { Component } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'cms';

  // Remove the selectedFeature property and switchView() method
}
