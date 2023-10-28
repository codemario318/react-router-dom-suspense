import { SearchBookOption, SearchBookResponse } from '../types/search-book';

export async function requestSearchBooks(option: SearchBookOption): Promise<SearchBookResponse> {
  const response = await fetch(`/api/search/book?${option.toQueryString()}`);
  return await response.json();
}