import React from "react";
import MetalsAdmin from "./MetalsAdmin";
import CurrencyConverter from "./pages/CurrencyConverter";
import NewsFeed from "./pages/NewsFeed";
import "../App.css";

export default function HomeNews() {
  return (
    <section className="container">
      <div className="columns features">
        <div className="column is-4">
          <div className="card is-shady">
            <div className="card-image has-text-centered">
              <i className="fa fa-paw"></i>
            </div>
            <div className="card-content">
              <div className="window content">
                <MetalsAdmin />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card is-shady">
            <div className="card-image has-text-centered">
              <i className="fa fa-empire"></i>
            </div>
            <div className="card-content">
              <div className="window content">
                <CurrencyConverter />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card is-shady">
            <div className="card-image has-text-centered">
              <i className="fa fa-apple"></i>
            </div>
            <div className="card-content">
              <div className="window content">
                <NewsFeed />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <small>  <a href="https://bitcoinmagazine.com/guides/what-altcoin">bitcoinmagazine.com/guides/what-altcoin</a></small> */}
    </section>
  );
}
