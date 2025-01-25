import { Component } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
  standalone: false
})
export class DocumentListComponent {
  
  documents: Document[] = [
    new Document(
      '1', 
      'Project Proposal', 
      'Initial project documentation', 
      'https://example.com/proposal.pdf', 
      []
    ),
    new Document(
      '2', 
      'Technical Spec', 
      'Detailed technical requirements', 
      'https://example.com/spec.pdf', 
      []
    )
  ];
}