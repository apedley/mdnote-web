
import { NgModule } from '@angular/core';
import { TruncateEllipsisPipe } from './truncate-ellipsis.pipe';
import { StripMarkdownPipe } from './strip-markdown.pipe';

export const PIPES = [ TruncateEllipsisPipe, StripMarkdownPipe ];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}

