import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

import titleimage from '../../sittingtitle.png';
import leftdrawericon from '../../leftdrawericon.png';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );

  return (
    <div className={styles.header}>
      <div className={styles.leftdrawericon}><img src={leftdrawericon} width="24px" height="16px" /></div>
      <div className={styles.content}>
          <Link to="/" ><img src={titleimage} alt="Sitting" /></Link>
      </div>
      <div className={styles.rightdrawericon}><img src={leftdrawericon} /></div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
