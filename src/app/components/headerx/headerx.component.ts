import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPlanDialogComponent } from '../edit-plan-dialog/edit-plan-dialog.component';

@Component({
  selector: 'app-headerx',
  templateUrl: './headerx.component.html',
  styleUrls: ['./headerx.component.css']
})
export class HeaderxComponent {
  zipCode = '1234';
  commodityType = 'Electricity';
  utilityProvider = 'Central Hudson';

  constructor(public dialog: MatDialog) {}

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditPlanDialogComponent, {
      width: '250px',
      data: {
        zipCode: this.zipCode,
        commodityType: this.commodityType,
        utilityProvider: this.utilityProvider
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.zipCode = result.zipCode;
        this.commodityType = result.commodityType;
        this.utilityProvider = result.utilityProvider;
        // You can add API call here to save the changes
        console.log('Saving changes:', result);
      }
    });
  }
}
