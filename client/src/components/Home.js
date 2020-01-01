import React, { Fragment } from 'react';
import HomeWindow from './HomeWindow';
import HomeContent from './HomeContent';
import MetalsAdmin from './MetalsAdmin';

export default function Home() {
  return (
    <Fragment>
      <HomeWindow />
      <div className="box cta">
       
        <p className="has-text-centered">
          <span className="tag is-primary">UPCOMING SOON </span>&nbsp;&nbsp; Real-Time News Bulletins on Crypto Price Movements
        </p>
      </div>
      <HomeContent />
      <MetalsAdmin />
    </Fragment>
  )
}
