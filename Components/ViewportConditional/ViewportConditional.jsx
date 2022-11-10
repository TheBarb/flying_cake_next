import styles from './viewportConditional.module.scss'
import Portrait from '../Portrait/Portrait'
import Landscape from '../Landscape/Landscape'
import { useState, useEffect } from 'react';


const ViewportConditional = () => {
    const [width, setWidth] = useState(0);
    const breakpoint = 768;

    useEffect(() => {

        function handleWindowResize(){
            setWidth(window.innerWidth);
            window.addEventListener('resize', handleWindowResize);
        }

        handleWindowResize();

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

  return width < breakpoint? (
      <Portrait/>
  ) : (
    <Landscape/>
  );
};

export default ViewportConditional