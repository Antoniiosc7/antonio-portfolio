import {Component, Inject, Input} from '@angular/core';
import {SafeUrlPipe} from "../../services/safeUrlPipe";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-pdf-viewer-popup',
  standalone: true,
  imports: [SafeUrlPipe, TranslateModule],
  templateUrl: './pdf-viewer-popup.component.html',
  styleUrl: './pdf-viewer-popup.component.css'
})

export class PdfViewerPopupComponent {
  pdfSrc: string;
  pdfName!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<PdfViewerPopupComponent>) {
    this.pdfSrc = data.pdfSrc;
    this.pdfName = data.pdfName;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
