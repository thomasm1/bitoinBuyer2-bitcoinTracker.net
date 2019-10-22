
import React from 'react'
let title = `Bitcoin Buyer Console: Phase I, Raw Materials`;


let tocTitle = ` Guiding Inspiration for Bitcoin Buyer:`
let toc1 = ` 
“Typically, momentum trading is effective in 
markets that 1) do not have valuation models, 2) have 
large amounts of volatility, and 3) have frequent mispricings. 
Momentum investing is not typically used in US stocks, bonds, 
or options – as they have clear valuation models (e.g. discounted 
    cash flow analysis for stocks and black Scholes for 
    options). However, for commodities and assets like crypto – 
    momentum trading can be an effective strategy that allows 
    protection from losses in downtrends and capture subside 
    on the uptrends. Based on historical data, this may be an 
    extremely effective strategy – until a valuation model has 
    been figured out.” 1  

1. https://
www.coindesk.com/set-protocol-launches-momentum-trading-strategy
 `;

let toc2 = ` 
A strategy to ...  
"... create deep reinforcement learning agents that learn 
to make money trading Bitcoin.

... to experiment with state-of-the-art deep 
reinforcement learning technologies to see 
if we can create profitable Bitcoin trading bots.
It seems to be the status quo to quickly 
shut down any attempts to create reinforcement 
learning algorithms, as it is “the wrong way 
to go about building a trading algorithm”. However,
 recent advances in the field have shown
 that RL agents are often capable of learning 
 much more than supervised learning agents
  within the same problem domain."  2  
 
2: https://
towardsdatascience.com/creating-bitcoin-trading-bots-that-dont-lose-money-2e7165fb0b29
 `;

function About() {
    const center = { textAlign: 'center', fontWeight: 'bold' }
    return (
        <React.Fragment >
            <hr />
            <h2 style={center}>About BitcoinBuyer Console</h2>
            <hr />
            <div className="row">
                <div className="col col-xs-6">
                    <pre style={center} >
                        {title}
                    </pre>
                    <pre style={{ padding: '10px' }}>
                        {toc1}
                    </pre>
                </div>
                <div className="col col-xs-6">

                    <pre style={center}>
                        {tocTitle}
                    </pre>
                    <pre style={{ padding: '10px' }}>
                        {toc2}
                    </pre>
                </div>
            </div>
        </React.Fragment>
    )
}


export default About;