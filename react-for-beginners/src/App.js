import { useState, useEffect } from "react";

// Coin Tracker
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []) // 빈 배열이면 한번만 실행
  return (
    <div>
      <h1>The Coins! {loading ? null : `Top${coins.length}`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((item, index) => (
          <li key={item.id}>{index+1}. {item.name} ({item.symbol}): ${item.quotes.USD.price.toFixed(4)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;