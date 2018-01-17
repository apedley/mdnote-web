import { StripMarkdownPipe } from './strip-markdown.pipe';


describe('Pipe: TruncateEllipsisPipe', () => {
  let pipe: StripMarkdownPipe;

  beforeEach(() => {
    pipe = new StripMarkdownPipe();
  });

  it('should return the string without markdown symbols', () => {
    expect(pipe.transform('### Hello')).toEqual('Hello');
  });

  it('should return the string without code block identifiers', () => {

    const codeString = `
\`\`\`javascript
var a = 1;
\`\`\``;

    expect(pipe.transform(codeString)).toEqual('var a = 1;');
  });

  it('should return the trim whitespace', () => {
    expect(pipe.transform('  testing test  ')).toEqual('testing test');
  });
});
