import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from './price.pipe';
import { FormatNumberPipe } from './format-number.pipe';
import { DateFormat } from './date-format.pipe';
import { SlideTextPipe } from './slidetext.pipe';

@NgModule({
    declarations: [
        PricePipe,
        FormatNumberPipe,
        DateFormat,
        SlideTextPipe
    ],
    imports: [ CommonModule ],
    exports: [
        PricePipe,
        FormatNumberPipe,
        DateFormat,
        SlideTextPipe
    ],
    providers: [],
})
export class PipeCustomModule {}