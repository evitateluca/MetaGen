import React from 'react'

import styles from './Footer.module.scss'
import lakaLogo from 'assets/laka-logo.svg'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.paragraph}>
            Powered by<a href="https://laka9.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <img src={lakaLogo} alt="laka Logo" className={styles.logo} />
            </a>
        </p>
    </div>
  )
}

export default Footer