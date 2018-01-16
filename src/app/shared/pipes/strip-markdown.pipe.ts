import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appStripMarkdown' })

export class StripMarkdownPipe implements PipeTransform {
  transform(initialString: string) {
    const textWithoutSymbols = initialString.replace(/^(#|\*|-){1,3} /gm, '');

    const textWithoutLanguageDeclarations = textWithoutSymbols.replace(/^```(\w+)?$/gm, '');

    return textWithoutLanguageDeclarations.trim();
  }
}
