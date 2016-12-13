import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#343434` }} className={styles.footer}>
      <p>A <a href='http://www.digitalhyperspace.com'>Digital Hyperspace</a> Production &middot; &copy; 2016</p>
    </div>
  );
}

export default Footer;
