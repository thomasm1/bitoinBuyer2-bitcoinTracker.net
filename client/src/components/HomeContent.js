import React from 'react'
import CurrencyConverter from './pages/CurrencyConverter'
import NewsFeed from './pages/NewsFeed'
import '../App.css'

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
                            <div className="window content">
                                <h4>Cryptocurrency </h4>
                                <p>Digital assets work as a medium of exchange that uses cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets. Cryptocurrency is an internet-based medium of exchange using cryptographical functions to conduct financial transactions. Cryptocurrencies leverage blockchain technology to gain decentralization, transparency, and immutability. Validation can be Proof of Stake or Proof of Work. </p>
                            </div>
                            <p><a href="/">Learn more</a></p>
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
                                <h4>Bitcoin</h4>
                                <p>Bitcoin is maintained by a network of miners using open-source software to connect to the Bitcoin network. Every time a new block is found, it refers to the previous block thus forming a “blockchain.” If it were to happen that two miners find a new block at the same time, there can be a short period when there are two different, competing transaction histories. The first blockchain to be extended with another block will be considered valid by the entire network. </p>
                            </div> 
                            <p><a href="/">Learn more</a></p>
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
                                <h4>Altcoins</h4>
                                <p>Altcoins can differ from Bitcoin in a range of ways, including a different economic model or a different coin-distribution method. Some employ different proof-of-work mining algorithms, perhaps to resist specialized mining hardware — or they don’t even rely on proof of work at all. Several altcoins offer a more versatile programming language to build applications on top of, while yet others offer more privacy compared to Bitcoin.<br /> <br /> </p>
                            </div>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <small>  <a href="https://bitcoinmagazine.com/guides/what-altcoin">bitcoinmagazine.com/guides/what-altcoin</a></small> */}
        </section>
    )
}
