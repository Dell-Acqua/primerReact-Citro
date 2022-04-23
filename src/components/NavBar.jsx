import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import CartWidget from "./CartWidget"
import logo from "./img/head.png"
import vineta from "./img/vineta3.png"

const estiloVineta = {
    paddingLeft: 10,
};


const NavBar = () => {
  return (
    <header>
        <div class="flex justify-center ">
            <img src={logo} alt="" width="50%" />
        </div>
        
    <div>
        <div class="navbar bg-base-300">
        <div class="flex-1">
            <a><img src={vineta} alt="" width="25%" style={estiloVineta}/></a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
            <li><a class="btn btn-success mx-3">Vegetales Hidroponicos</a></li>
            <li><a class="btn btn-success mx-3">Kits Caseros</a></li>
            <li><a class="btn btn-success mx-3">Kits Profesionales</a></li>
            </ul>
        </div>
        <div><CartWidget/></div>
        
        </div>
    </div>
    </header>
  )
}
export default NavBar