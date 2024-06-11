import React from 'react';
import Footer from '@theme-original/Footer';
import styles from './styles.module.css';
import Substack from '@site/src/components/Substack';

export default function FooterWrapper(props) {
  return (
  <footer className="footer footer--dark">
    <div className="container container-fluid">
      <div className="row footer__links">
        <div className="col footer__col">
          <div className="footer__title">Contact</div>
          <ul className="footer__items clean-list">
            <li className="footer__item">
              <a href="mailto:jiangjiaxingogogo@gmail.com" target="_blank" rel="noopener noreferrer" className="footer__link-item">
                Email 
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
                  <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                </svg>
              </a>
            </li>
            <li className="footer__item">
              <a href="https://x.com/JJJ44129022" target="_blank" rel="noopener noreferrer" className="footer__link-item">
                Twitter
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
                  <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="col footer__col">
          <div className="footer__title">More</div>
          <ul className="footer__items clean-list">
            <li className="footer__item">
              <a href="https://github.com/jiangjiax/informedainews.com" target="_blank" rel="noopener noreferrer" className="footer__link-item">
                GitHub
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
                  <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="col footer__col">
          <Substack />
        </div> */}
      </div>
      <div className="footer__bottom text--center">
        <div className="footer__copyright">Copyright © 2024 Informed AI News, Inc. Built with Docusaurus.</div>
      </div>
    </div>
  </footer>
  );
}
