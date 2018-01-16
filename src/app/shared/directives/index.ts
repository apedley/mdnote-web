import { NgModule } from '@angular/core';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';

export const DIRECTIVES = [ ClickStopPropagationDirective ];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule {}
