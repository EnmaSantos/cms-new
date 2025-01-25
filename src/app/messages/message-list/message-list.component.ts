import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  standalone: false
})
export class MessageListComponent {
  messages: Message[] = [
    new Message('1', 'Meeting Notes', 'Team meeting at 2 PM today', 'John Doe'),
    new Message('2', 'Project Update', 'Deadline extended to Friday', 'Jane Smith')
  ];

  onMessageAdded(message: Message) {
    this.messages.push(message);
  }
}