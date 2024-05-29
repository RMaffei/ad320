import { SimpleLogger, LogMethod, MyReadOnly } from './decorators';

@SimpleLogger
class WikimediaPage {
  constructor(
    public title: string,
    public summary: string,
    public content: string,
    public albums: string[]
  ) {}

  @LogMethod
  printSummary() {
    console.log(this.summary);
  }

  @LogMethod
  printContent(section?: string) {
    if (section === 'albums') {
      console.log(`Albums: ${this.albums.join(', ')}`);
    } else {
      console.log(this.content);
    }
  }

  @MyReadOnly
  get info() {
    return `${this.title}: ${this.summary}`;
  }
}

export default WikimediaPage;