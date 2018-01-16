import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appTruncateEllipsis' })

export class TruncateEllipsisPipe implements PipeTransform {
  transform(initialString: string, stringLength: number = 200) {
    const rawText = initialString.replace(/(<([^>]+)>)/gi, '');

    if (initialString.length >= stringLength) {
      return `${rawText.slice(0, stringLength - 3)}...`;
    }

    return rawText;
  }
}
