import './Css/NavBar.css';
import logo from './Assets/imgs/PatrikaCafeLogo.png'
const NavBar = () => {
  return (
    <>
      <div id="NavBar">
        <div id="NavbarLogo">
          <div id="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div id="NavbarLinks">
          <div className="NavLink">Home</div>
          <div className="NavLink">About</div>
          <div className="NavLink">Menu</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
