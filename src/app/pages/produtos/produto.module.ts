import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';

import { ProdutoController } from './produto/produto.controller';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ProdutoService } from './services/produto.service';

@NgModule({
    declarations : [ProdutoController, PesquisaComponent],
    exports: [ProdutoController ],
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
    ],
    providers : [ProdutoService]
})
export class ProdutoModule{}