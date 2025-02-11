import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cms-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Fixed typo here: styleUrl -> styleUrls
})
export class HeaderComponent {
  @Output() selectedFeatureEvent = new EventEmitter<string>();

  // Add the collapsed property
  collapsed = true;

  onSelected(selectedFeature: string) {
    this.selectedFeatureEvent.emit(selectedFeature);
  }
}