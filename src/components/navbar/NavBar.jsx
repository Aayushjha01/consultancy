import "./navBar.scss"
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
// import img1 from '../../images/log.jpg'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { AuthContext } from "../../context/AuthContext";


const NavBar = () => {
  const {toggle,darkMode} = useContext(DarkModeContext)
  const{currentUser}= useContext(AuthContext);
  return (
   <div className="navbar">
   <div className="left">
   <Link to="/" style={{textdecoration:"none"}}>
   <span>Ur Consultant</span>
   </Link>
   <HomeIcon/>

  {darkMode ?<DarkModeIcon onClick={toggle}/>:<WbSunnyIcon onClick={toggle}/>}
   <AppsIcon/>
   <div className="search">
   <SearchIcon/>
   <input type="text" name="" id="" placeholder="Search..."/>
   </div>
   </div>
   <div className="right">
   <PersonIcon/>
   <EmailIcon/>
   <NotificationsIcon/>
   <div className="user">
      <img src={currentUser.pic.prof} alt="" />
      <span>{currentUser.name}</span>
      </div>
   </div>
   </div>

  )
}

export default NavBar