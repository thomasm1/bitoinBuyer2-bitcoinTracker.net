import React, { Fragment } from 'react';
import Window from './HomeWindow';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Window />
      <div className="box cta">
       
        <p className="has-text-centered">
          <span className="tag is-primary">New </span> Real-Time News Bulletins on Crypto Price Movements
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
