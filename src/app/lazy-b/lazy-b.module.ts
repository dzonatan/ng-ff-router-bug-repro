import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'module-b',
  template: 'hello from module <b>B</b>',
})
export class ModuleBComponent {}

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: ModuleBComponent }])],
  exports: [RouterModule],
})
export class LazyModuleBRoutingModule {}

@NgModule({
  declarations: [ModuleBComponent, ModuleBComponent],
  imports: [CommonModule, LazyModuleBRoutingModule],
})
export class LazyBModule {}
