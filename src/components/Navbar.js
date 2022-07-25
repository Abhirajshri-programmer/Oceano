import Logo from '../images/oceano-logo.png';

const Navbar = (props) => {
    return <div className="navbar">
    <img src={Logo}/>
    <div className="navbar__links">
      <ul>
        <li><a>Home</a></li>
        <li><a>Advertise</a></li>
        <li><a>Supports</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <button className="navbar__btn">Get Started</button>
  </div>
}

export default Navbar;