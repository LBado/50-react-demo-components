import React from 'react';

import styles from './MediaCounter.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import MediaCounterContainer from './MediaCounterContainer';

const MediaCounter = () => {
  const twitterIcon =  <FontAwesomeIcon icon={faTwitter} />;
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
  const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
  return (
    <div className={styles.mCContainer}>
      <MediaCounterContainer icon={twitterIcon} counterMax={12000} speed={500} title={'Twitter followers'} />
      <MediaCounterContainer icon={youtubeIcon} counterMax={5000} speed={500} title={'Youtube subscribers'} />
      <MediaCounterContainer icon={facebookIcon} counterMax={7500} speed={500} title={'Facebook friends'} />
    </div>
  );
};

export default MediaCounter;
