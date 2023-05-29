import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const Layout = () => {

    return (
        <div className="text-center">
            <Header />
            <Outlet className="my-20" />
        </div>
    );
};

export default Layout;