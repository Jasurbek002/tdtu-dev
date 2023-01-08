import Footer from "./footer";
import Navbar from "./navbar";
import Topbar from "./topbar";
import styles from './../public/assets/settings.module.scss'
import { useEffect, useState } from "react";

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
        </div>
    );
}

export default Layout;
