import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchComponent } from './research/research.component';
import { InputSearchComponent } from '../shared/input-search/input-search.component';
import { RouterModule } from '@angular/router';
import { ModelsRouter } from './models.routes';



@NgModule({
  declarations: [
    ResearchComponent,
    InputSearchComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(ModelsRouter)
  ],
  providers: [

  ]
})
export class ModelsModule { }
