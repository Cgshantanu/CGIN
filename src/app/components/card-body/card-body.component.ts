// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-card-body',
//   templateUrl: './card-body.component.html',
//   styleUrls: ['./card-body.component.css']
// })
// export class CardBodyComponent {
//   downloadPdf() {
//     const pdfUrl = 'assets/CGI-Energy.pdf';
//     const pdfName = 'CGI-Energy.pdf';

//     fetch(pdfUrl)
//       .then(response => response.blob())
//       .then(blob => {
//         const blobUrl = window.URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = blobUrl;
//         link.download = pdfName;
//         link.click();
//         window.URL.revokeObjectURL(blobUrl);
//       })
//       .catch(error => {
//         console.error('Error downloading PDF:', error);
//       });
//   }
// }




import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.css']
})

export class CardBodyComponent {
  pdfUrl: string = 'assets/CGI-Energy.pdf';
  safePdfUrl: SafeResourceUrl;
  showPdfPreview: boolean = false;

  constructor(private sanitizer: DomSanitizer) {
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }

  downloadPdf() {
    const pdfName = 'CGI-Energy.pdf';

    fetch(this.pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = pdfName;
        link.click();
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Error downloading PDF:', error);
      });
  }

  previewPdf() {
    this.showPdfPreview = true;
  }

  closePdfPreview() {
    this.showPdfPreview = false;
  }
}





// import {Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-edit-plan-form',
//   templateUrl: './edit-plan-form.component.html',
//   styleUrls: ['./edit-plan-form.component.css']
// })
// export class EditPlanFormComponent {
//   @Input() planDetails: {
//     zipCode: string;
//     commodityType: string;
//     utilityProvider: string;
//   };

//   @Output() closeForm = new EventEmitter<void>();
//   @Output() savePlan = new EventEmitter<any>();

//   onSubmit() {
//     this.savePlan.emit(this.planDetails);
//     this.closeForm.emit();
//   }

//   onCancel() {
//     this.closeForm.emit();
//   }
// }
