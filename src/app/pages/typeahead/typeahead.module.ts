import { NgModule } from '@angular/core';
import { TypeaheadService } from './services/typeahead.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TypeaheadComponent } from './components/typeahead.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
import { SearchModule } from '../usuarios/search/search.module';


@NgModule({
    declarations: [TypeaheadComponent],
    exports: [TypeaheadComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatInputModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        SearchModule
    ],
    providers: [TypeaheadService]
})

export class TypeaheadModule {}