import React, { Fragment } from "react";
import Video from "./Video";
import HomeWindow from "./HomeWindow";
import HomeNews from "./HomeNews";
import HomeContent from "./HomeContent";

export default function Home() {
  return (
    <Fragment>
      <HomeWindow />
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">UPCOMING SOON </span>&nbsp;&nbsp;
          Real-Time News Bulletins on Crypto Price Movements
        </p>
      </div>
      <HomeNews />
      <HomeContent />

      <Video />
    </Fragment>
  );
}
