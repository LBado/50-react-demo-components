import React from 'react';

const RightSlider = ({ imgStyle, index }) => {
  const imageStyle = {
    backgroundImage: `url('https://source.unsplash.com/random/1920x1080${index}')`,
  };
  return <div style={imageStyle}></div>;
};

export default RightSlider;
