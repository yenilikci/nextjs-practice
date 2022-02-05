import Navbar from './Navbar.js';

const Layout = props => (
    <div>
        <Navbar/>
        {props.children }
    </div>
);

export default Layout;
