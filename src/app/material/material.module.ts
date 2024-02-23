import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { MatBadgeModule,
         MatButtonModule,
         MatButtonToggleModule,
         MatProgressSpinnerModule,
        } from '@angular/material';

const material =[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule
];

@NgModule({
  
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
