


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderxComponent } from './components/headerx/headerx.component';
// import { FilterComponent } from './components/filter/filter.component';
// import { CardBodyComponent } from './components/card-body/card-body.component';

// import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// // import { EditbtnComponent } from './components/editbtn/editbtn.component';
// import { EditPlanDialogComponent } from './components/edit-plan-dialog/edit-plan-dialog.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderxComponent,
//     FilterComponent,
//     CardBodyComponent,
//     // EditbtnComponent,
//     EditPlanDialogComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';

// import { AppComponent } from './app.component';
// import { HeaderxComponent } from './components/headerx/headerx.component';
// import { EditPlanDialogComponent } from './components/edit-plan-dialog/edit-plan-dialog.component';
// @NgModule({
//   declarations: [AppComponent, HeaderxComponent, EditPlanDialogComponent],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     BrowserAnimationsModule,
//     MatDialogModule,
//     MatButtonModule,
//     MatInputModule,
//     MatFormFieldModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderxComponent } from './components/headerx/headerx.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { EditPlanDialogComponent } from './components/edit-plan-dialog/edit-plan-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderxComponent,
    FilterComponent,
    CardBodyComponent,
    EditPlanDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
