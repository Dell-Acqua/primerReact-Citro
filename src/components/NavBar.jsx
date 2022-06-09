import { Link } from "react-router-dom";
import CartWidget from "./CartWidget"
import logo from "./img/head.png"
import vineta from "./img/vineta3.png"

const estiloVineta = {
    paddingLeft: 10,
};

const NavBar = () => {
  return (
    <header>
        <div className="flex justify-center ">
            <img src={logo} alt="" width="50%" />
        </div>
        <div>
            <div className="navbar bg-base-300">
            <div className="flex-1">
                <Link to='/'><img src={vineta} alt="" width="25%" style={estiloVineta}/></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><Link to='/' className="btn btn-success mx-3">Home</Link></li>
                <li><Link to='/productos' className="btn btn-success mx-3">TodosProductos</Link></li>
                <li><Link to='/productos/kits' className="btn btn-success mx-3">Kits Caseros</Link></li>
                <li><Link to='/productos/vegetales' className="btn btn-success mx-3">Vegetales</Link></li>
                </ul>
            </div>
            <div><Link to="/carrito"><CartWidget/></Link></div>           
            </div>
        </div>
    </header>
  )
}
export default NavBar