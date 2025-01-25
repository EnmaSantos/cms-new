import { Component, Output, EventEmitter } from '@angular/core'; // Fixed: Added Output and EventEmitter
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  standalone: false,
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  @Output() selectedContactEvent = new EventEmitter<Contact>();
  contacts: Contact[] = [
    new Contact(
      '1',
      'R. Kent Jackson',
      'jacksonk@byui.edu',
      '208-496-3771',
      'https://raw.githubusercontent.com/EnmaSantos/cms/a29f5cef72516895d8dc22f5d04fc0c9850a14c7/src/assets/images/barzeer.jpg',  
      null
    ),
    new Contact(
      '2',
      'Rex Barzee',
      'barzeer@byui.edu',
      '208-496-3768',
      'https://raw.githubusercontent.com/EnmaSantos/cms/a29f5cef72516895d8dc22f5d04fc0c9850a14c7/src/assets/images/jacksonk.jpg',   
      null
    )
  ];

  
  onSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
  } 
} 