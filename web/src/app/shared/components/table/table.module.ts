import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { SelectDropdDownModule } from '../select-dropdown/select-drop.module';
import { PipeCustomModule } from '@shared/pipe/pipe.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        SelectDropdDownModule,
        PipeCustomModule
    ],
    declarations: [
        DataTableComponent
    ],
    exports: [
        DataTableComponent
    ]
})
export class TableModule { }
