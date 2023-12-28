import Search from '@/routers/home/search';
import { Outlet } from 'react-router-dom';


export default function HomeIndex() {
  return (<>
    <Search />
    <Outlet />
  </>)
}