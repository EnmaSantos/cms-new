import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../document.service'; // Adjust the path as necessary
import { Document } from '../document.model';
import { WindRefService } from '../../wind-ref.service'; // Adjust the path as necessary

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css'],
  standalone: false
})
export class DocumentDetailComponent implements OnInit {
  document: Document;
  nativeWindow: any;

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private windowRefService: WindRefService,
    private router: Router // Inject the Router service
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Fetch the document data using the document ID
      this.document = this.documentService.getDocument(id);
    });
    this.nativeWindow = this.windowRefService.getNativeWindow();
  }

  onView(): void {
    if (this.document?.url) {
      this.nativeWindow.open(this.document.url, '_blank');
    }
  }

  onDelete(): void {
    if (confirm('Are you sure you want to delete this document?')) {
      this.documentService.deleteDocument(this.document);
      this.router.navigate(['/documents']); // Navigate back to the document list
    }
  }
}
