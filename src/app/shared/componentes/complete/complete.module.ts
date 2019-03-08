import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { NgbdTableComplete } from './table-complete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from '../data-table/data-table.component';

@NgModule({
    declarations: [NgbdTableComplete, NgbdSortableHeader],
    exports: [NgbdTableComplete, NgbdSortableHeader],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule
    ]

})
export class CompleteModule{}