export type SearchBookSort = 'sim' | 'date';

export interface SearchBookOptionParams {
  query: string;
  display?: number;
  start?: number;
  sort?: string;
}

export class SearchBookOption {
  private readonly query: string;
  private readonly display?: number;
  private readonly start?: number;
  private readonly sort?: string;

  constructor(params: SearchBookOptionParams) {
    this.query = params.query;
    this.display = params.display;
    this.start = params.start;
    this.sort;
  }

  toQueryString(): string {
    let queryString = `query=${encodeURIComponent(this.query)}`;
    queryString += this.display ? `&display=${this.display}` : '';
    queryString += this.start ? `&start=${this.start}` : '';
    queryString += this.sort ? `&sort=${this.sort}` : '';
    return queryString;
  }
}

export interface SearchBookResponse {
  lastBuildDate: Date;
  total: number;
  start: number;
  display: number;
  items: BookItem[];
}

export interface BookItem {
  title: string;
  link: string;
  image: string;
  author: string;
  discount?: string;
  publisher: string;
  isbn: string;
  description: string;
  pubdate: string;
}

export class Book {
  private readonly _title: string;
  private readonly _link: string;
  private readonly _image: string;
  private readonly _author: string;
  private readonly _discount?: number | undefined;
  private readonly _publisher: string;
  private readonly _isbn: string;
  private readonly _description: string;
  private readonly _pubdate: Date;

  constructor(params: BookItem) {
    this._title = params.title;
    this._link = params.link;
    this._image = params.image;
    this._author = params.author;
    this._publisher = params.publisher;
    this._discount = parseInt(params.discount ?? '');
    this._isbn = params.isbn;
    this._description = params.description;
    this._pubdate = new Date(params.pubdate);
  }

  get title(): string {
    return this._title;
  }

  get link(): string {
    return this._link;
  }

  get image(): string {
    return this._image;
  }

  get author(): string {
    return this._author;
  }

  get discount(): string {
    return this._discount?.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' }) ?? '판매 중지';
  }

  get publisher(): string {
    return this._publisher;
  }

  get isbn(): string {
    return this._isbn;
  }

  get description(): string {
    return this._description;
  }

  get pubdate(): string {
    return this._pubdate.toLocaleDateString('ko-KR');
  }
}
