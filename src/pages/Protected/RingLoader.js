import React from 'react';
import "../../styles/RingLoader.css";

const RingLoader = () => {
  return (
    <div class="container">
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
    <span class="loading">Hornet....</span>
    </div>
  );
};

export default RingLoader;
