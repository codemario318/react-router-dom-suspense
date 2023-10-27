import { LoaderFunctionArgs } from "react-router-dom";
import { requestSearchBooks, Channel } from '../utils/requests';

export async function booksLoader({ request }: LoaderFunctionArgs): Promise<{ channel: Channel; }> {
  const url = new URL(request.url);

  const query: string = url.searchParams.get("query") ?? '';
  const display: number = Number.parseInt(url.searchParams.get('display') ?? '10');
  const sort: string = url.searchParams.get('sort') ?? 'sim';

  const channel: Channel = await requestSearchBooks({ query, display, sort });

  return { channel };
}