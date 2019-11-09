import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-paw"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>CryptoCurrencies </h4>
                            <p>Digital assets designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets.</p>
                            <p><a href="/">Learn more</a></p>
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
                        <div className="content">
                            <h4>Bitcoin</h4>
                            <p>Bitcoin is maintained by a network of users. As an open network, anyone can become a user by simply downloading a piece of open-source software on their computer and connecting to the Bitcoin network through the internet.</p>
                            <p><a href="/">Learn more</a></p>
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
                        <div className="content">
                            <h4>Altcoins</h4>
                            <p>Altcoins can differ from Bitcoin in a range of ways. Some have a different economic model or a different coin-distribution method, like altcoins that were given away to all citizens of a country. Others employ different proof-of-work mining algorithms, perhaps to resist specialized mining hardware — or maybe they don’t even rely on proof of work at all. Several altcoins offer a more versatile programming language to build applications on top of, while yet others offer more privacy compared to Bitcoin. And there are also altcoins that serve very specific, non-monetary use cases, like domain name registry or data storage pointers.<sup>1</sup></p>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <small>1. <a href="https://bitcoinmagazine.com/guides/what-altcoin">bitcoinmagazine.com/guides/what-altcoin</a></small>
    </section>
  )
}
