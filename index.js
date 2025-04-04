const express = require('express');
const app = express();

const API_KEY = '6Z5HQN7ECS997K47QXKW2J59B2CD2QDAQP';

app.get('/etherscan-info', async (req, res) => {
  try {
    const [priceRes, gasRes, supplyRes] = await Promise.all([
      fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_KEY}`),
      fetch(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${API_KEY}`),
      fetch(`https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${API_KEY}`)
    ]);

    const [priceData, gasData, supplyData] = await Promise.all([
      priceRes.json(),
      gasRes.json(),
      supplyRes.json()
    ]);

    res.json({
      eth_price: priceData.result,
      gas_info: gasData.result,
      eth_supply: supplyData.result
    });
  } catch (err) {
    console.error('Error fetching Etherscan data:', err);
    res.status(500).json({ error: 'Failed to fetch from Etherscan' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

app.use(express.static('public'));
