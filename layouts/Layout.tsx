import { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Fragment } from "react";

function useScreenWidth() {
    const [screenWidth, setScreenWidth] = useState(0);
  
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      handleResize();

      // Event listener for window resize
      window.addEventListener('resize', handleResize);
    }, []);
    return screenWidth;
}

function Layout(props: any){
    return(
        <Fragment>
              <main>{props.children}</main>
        </Fragment>
        )
}

export default Layout;
