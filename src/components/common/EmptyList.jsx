import React from 'react';
import emptyGif from '../../assets/images/13525-empty.gif';

export const EmptyList = () => {
  return (
    <div className="emptyList-wrap">
      <img src={emptyGif} alt="empty" />
    </div>
  );
};
