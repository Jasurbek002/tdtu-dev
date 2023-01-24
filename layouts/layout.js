import Footer from "./footer";
import Navbar from "./navbar";
import Topbar from "./topbar";
import styles from './../public/assets/settings.module.scss'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {

    return (
        <div className={styles.container}>
          <Topbar />
          <Navbar />
          {
            children
          }  
          <Footer />
          <ToastContainer />
        </div>
    );
}

export default Layout;
