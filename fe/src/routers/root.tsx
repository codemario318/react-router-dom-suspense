import { Outlet } from 'react-router-dom';
import Nav from '../components/nav';

export default function App() {
  return (<>
    <Nav />
    <Outlet />
  </>)
}