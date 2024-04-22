import React,{useState} from "react";
import { NavLink,useLocation,useNavigate,Link } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(true);

    const closeNav = () => {
        setCollapsed(true);
    };

  return (
    <div className='container-fluid p-0 m-0' style={{ width: '100%', height: '100%' }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-start">
                <div className="container-fluid">
                    <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setCollapsed(!collapsed)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   

                    <div className={`collapse navbar-collapse  ${collapsed ? '' : 'show'}`} id="navbarTogglerDemo01">
                       

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3 px-3" onClick={closeNav}>
                        <li className='nav-item d-flex justify-content-center align-items-center' style={{ height: '100%', fontSize: '1.5rem',marginRight:'15px' }}>
                                <Link to='/admin'><i className="fa-solid fa-house"></i></Link>
                            </li>
                            
                            <li className='nav-item'>
                                <Link to='/admin/add_management' className='nav-link' end>Add Management</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admin/admintable' className='nav-link'>View management</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="..." className='nav-link'>Reports</Link>
                            </li>
                            
                           

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
  );
};

export default Navbar;
