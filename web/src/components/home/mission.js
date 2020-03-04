import React from 'react'
import {buildImageObj} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import Container from '../container'
import image from '../../images/mission-bg.jpg'
import styles from './mission.module.css'

function Mission ({  }) {
  return (
  <section className={styles.mission}>
    <Container>
      <div className={styles.imgContainer}>
        <img alt="Passiv Interface" src={image} />
      </div>
      <div className={styles.copyContainer}>
        <h2><span>The</span> Mission</h2>
        <p>At Passiv we believe that you should not have to work hard at making your investments work for you. We send you email notifications whenever cash hits your account, whether through dividends or contributions. We also let you set target allocations to rebalance your portfolio with one click.</p>
        <a href="/about/" className={styles.btn3}><span>About Passiv</span></a>
      </div>
    </Container>
  </section>

  )
}

export default Mission
