import react from "react";
import './Navbar.css';
function Navbar(){
return(
    <nav>
    <div class="navbar">
      <a href="#" class="active">Home</a>
      <a href="https://satyasuranjeet.github.io/PPOWEB/">Contact</a>
      <a href="javascript:void(0);" class="icon" onclick="toggleNavbar()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </nav>
);
}
export default Navbar;