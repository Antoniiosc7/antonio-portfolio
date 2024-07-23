import {Component, Inject, Input} from '@angular/core';
import {SafeUrlPipe} from "../../services/safeUrlPipe";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-pdf-viewer-popup',
  standalone: true,
  imports: [SafeUrlPipe],
  templateUrl: './pdf-viewer-popup.component.html',
  styleUrl: './pdf-viewer-popup.component.css'
})

export class PdfViewerPopupComponent {
  pdfSrc: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<PdfViewerPopupComponent>) {
    this.pdfSrc = data.pdfSrc;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
