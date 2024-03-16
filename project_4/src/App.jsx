import { useEffect, useState } from 'react'

function App() {
  const [countries, setCountries] = useState([]);
  const [amount, setAmount] = useState(1);
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const apiKey = '1219ae3f4e3752c08cc9c931';

  useEffect(() => {
    const fectCountries = async () => {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
      let data = await response.json();
      setCountries(data.supported_codes);
    }
    fectCountries();
  }, []);

  const exchangeCurrency = async () => {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`)
    let data = await response.json();

    setExchangeAmount(data.conversion_rates[toCurrency] * amount);
  }

  const swapValues = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  useEffect(() => {
    exchangeCurrency();
  }, [fromCurrency, toCurrency, amount]);
  return (
    <>
      <div className="container">
        <div className="tittle"><h2>Currency Converter</h2></div>
        <div className="result_wrapper">
          <h4>{`${amount + ".00"} ${fromCurrency} =`}</h4>
          <h1>{`${exchangeAmount} ${toCurrency}`}</h1>
        </div>
        <div className="currency_wrapper">
          <div className="input_wrapper">
            <h3>From</h3>
            <div className="input_group">
              <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                {countries.map((country) => (
                  <option
                    key={country[0]} value={country[0]}>{country[1]} </option>
                ))}
              </select>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
          </div>
          <div className="swap_btn">
            <button className="swap" onClick={swapValues}>
              <i className="bi bi-arrow-left-right"></i>
            </button>
          </div>
          <div className="input_wrapper">
            <h3>To</h3>
            <div className="input_group">
              <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                {countries.map((country) => (
                  <option key={country[0]} value={country[0]}>{country[1]}</option>
                ))}
              </select>
              <input type="number" readOnly value={exchangeAmount} />
            </div>
          </div>
          <div style={{ width: '100%' }}><button className="exchange_btn" onClick={exchangeCurrency}>GET EXCHANGE RATE</button></div>
        </div>
      </div>
    </>
  )
}

export default App
