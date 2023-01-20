import Footer from "./footer";
import Navbar from "./navbar";
import Topbar from "./topbar";
import styles from './../public/assets/settings.module.scss'
import { useEffect, useState } from "react";
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
  const [url,setUrl] = useState(false)
  useEffect(() =>{
     if(window.location.pathname === '/auth/admin'){
      setUrl(true)
     }else{
      setUrl(false)
     }
  })
    return (
        <div className={styles.container}>
          <Topbar url={url} />
          <Navbar url={url} />
          {
            children
          }  
          <Footer url={url} />
          <ToastContainer />
        </div>
    );
}

export default Layout;
