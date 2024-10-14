import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-plan-dialog',
  templateUrl: './edit-plan-dialog.component.html',
  styleUrls: ['./edit-plan-dialog.component.css']
})
export class EditPlanDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditPlanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
