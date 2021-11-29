import React from 'react'
// import Axios from 'axios'
import ExchangeRate from './ExchangeRate'

const CurrencyConverter = () => {

    const currencies = ['BTC', 'ETH', 'HEX', 'USD', 'XRP', 'LTC', 'ADA']

    const convert  = () => {
        // const options = {
        //     method: 'GET',
        //     url:'https://alpha-vantage.p.rapidapi.comp/query',
        //     params:{from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
        //     headers: {
        //         'x-rapidapi-host':'alpha-vantage.p.rapidapi.com',
        //         'x-rapidapi-key':'---------------------------------'
        //     }
        // }

        // axios.request(options).then((response) => {
        //     console.log(response.data['Realtime Currency Exchange Rate']['Exchange Rate'])
        //     setExchangeRate(response.data['Realtime Currency Exchange Rate']['Exchange Rate'])
        //     SpeechRecognitionResult(response.data['Realtime Currency Exchange Rate']['Exchange Rate'] * amount)
        // }).catch((err) => {
        //     console.error(err)
        // })
    }

    return (
        <div className="currency-converter">
            <h2>Currency Converter</h2>

            <table>
                <tbody>
<tr>
    <td>Primary Currency:</td>
<td>  
    <input type="number" 
    name="currency-amount-1"
    value={""} 
    /> 
    </td>
    <td>
        <select  
          value={""}
    name="currency-amount-1"
    className="currency-options"
    >  
        {/* {currencies.map( currency, _index => (<option key={_index}>{currency}</option>))} */}
    </select>
    </td>
    </tr>

    <tr>
    {/* <td>Secondary Currency:</td>
<td>  
    <input  
    name="currency-amount-2"
    value={result} 
    disabled={true}
    /> 
    </td>
    <td>
        <select  
          value={chosenSecondaryCurrency}
    name="currency-amount-2"
    className="currency-options"
    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
    >  
        {currencies.map( currency => (<option>{currency}</option>))}
    </select>
    </td> */}
    </tr>
                </tbody>
            </table>
            <ExchangeRate />
        </div>
    )
}

export default CurrencyConverter