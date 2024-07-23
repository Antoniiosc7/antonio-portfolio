import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({standalone: true, name: 'safeUrl'})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
