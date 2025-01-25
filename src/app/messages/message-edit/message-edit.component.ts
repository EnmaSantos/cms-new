import { Component, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css'],
  standalone: false
})
export class MessageEditComponent {
  @Output() messageAdded = new EventEmitter<Message>();
  subject = '';
  msgText = '';

  onSend() {
    const newMessage = new Message(
      Date.now().toString(),
      this.subject,
      this.msgText,
      'Current User' // Temporary until we learn how to login
    );
    this.messageAdded.emit(newMessage);
    this.clearFields();
  }

  clearFields() {
    this.subject = '';
    this.msgText = '';
  }
}