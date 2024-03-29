import { useHistory } from 'react-router';
import styles from './PersonLinkBack.module.css';
import iconBack from './img/back.svg'

const PersonLinkBack = () => {
   const history = useHistory();

   const handleGoBack = (e) => {
      e.preventDefault();
      history.goBack();
   };

   return (
      <a href="#top" onClick={handleGoBack} className={styles.link}>
			<img className={styles.link__img} src={iconBack} alt="Go back"/>
         <span>Go Back</span>
      </a>
   );
};

export default PersonLinkBack;
