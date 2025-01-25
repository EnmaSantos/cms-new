import { Component, Input } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
  standalone: false,
})
export class ContactItemComponent {
  @Input() contact: Contact; // Add this line
}