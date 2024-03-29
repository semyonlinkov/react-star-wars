import { NavLink } from 'react-router-dom';
import Favorite from '@components/Favorite';

import styles from './Header.module.css';

const Header = () => {
   return (
      <div className={styles.container}>
         <ul className={styles.list__container}>
            <li>
               <NavLink to="/" exact>
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink to="/People/?page=1">People</NavLink>
            </li>
            <li>
               <NavLink to="/not-found" exact>
                  Not Found
               </NavLink>
            </li>
         </ul>
         <Favorite />
      </div>
   );
};

export default Header;
