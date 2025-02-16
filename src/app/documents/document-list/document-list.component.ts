import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  standalone: false
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    // Initialize the document list
    this.documents = this.documentService.getDocuments();

    // Subscribe to changes in the document list
    this.documentService.documentChangedEvent.subscribe(
      (updatedDocuments: Document[]) => {
        this.documents = updatedDocuments;
      }
    );
  }
}
