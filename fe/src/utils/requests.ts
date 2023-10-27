export interface SearchBooksParam {
  query: string;
  display?: number;
  start?: string;
  sort?: string;
}

export interface SearchBooksResponse {
  rss: { channel: Channel };
}

export interface Channel {
  lastBuildDate: Date;
  total: number;
  start: number;
  display: number;
  books: Item[];
}

export interface Item {
  title: string;
  link: string;
  image: string;
  author: string;
  discount?: number;
  publisher: string;
  isbn: string;
  description: string;
  pubdate: Date;
}

export async function requestSearchBooks(param: SearchBooksParam): Promise<Channel> {
  const response = await fetch(`/api?query=${param.query}`);
  const body = await response.json();

  if (!!response.ok) {
    switch (body.code) {
      case 'SE01':
        throw new Error('잘못된 쿼리요청입니다.');
      case 'SE02':
        throw new Error('부적절한 display 값입니다.');
      case 'SE03':
        throw new Error('부적절한 start 값입니다.');
      case 'SE04':
        throw new Error('부적절한 sort 값입니다.');
      case 'SE06':
        throw new Error('잘못된 형식의 인코딩입니다.');
      case 'SE05':
        throw new Error('존재하지 않는 검색 api 입니다.');
      case 'SE99':
        throw new Error('검색 기능이 정상적으로 동작하지 않습니다.');
      default:
        throw new Error('요청 처리중 오류가 발생하였습니다.');
    }
  }

  return body.rss;
}