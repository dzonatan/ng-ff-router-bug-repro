import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'module-a',
  template: 'hello from module <b>A</b>',
})
export class ModuleAComponent {}

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: ModuleAComponent }])],
  exports: [RouterModule],
})
export class LazyModuleARoutingModule {}

@NgModule({
  declarations: [ModuleAComponent, ModuleAComponent],
  imports: [CommonModule, LazyModuleARoutingModule],
})
export class LazyAModule {}
