import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  standalone: false
})
export class MessageListComponent {
  // Sample messages
  messages: Message[] = [
    new Message('1', 'Welcome!', 'Welcome to our messaging system', 'Admin'),
    new Message('2', 'Reminder', 'Team meeting at 2 PM today', 'Project Manager'),
    new Message('3', 'Update', 'New features deployed successfully', 'Dev Team')
  ];

  onAddMessage(newMessage: Message) {
    this.messages.push(newMessage);
  }
}