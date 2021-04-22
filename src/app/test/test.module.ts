import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondTestComponent } from './second-test/second-test.component';



@NgModule({
  declarations: [SecondTestComponent],
  imports: [
    CommonModule
  ],
  exports : [SecondTestComponent]

})
export class TestModule { }
