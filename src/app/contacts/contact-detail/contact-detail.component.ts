import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service'; // Adjust the path as necessary
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  standalone: false
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.contact = this.contactService.getContact(id);
    });
  }

  onDelete(): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(this.contact);
      this.router.navigate(['/contacts']); // Navigate back to the contact list
    }
  }
}
