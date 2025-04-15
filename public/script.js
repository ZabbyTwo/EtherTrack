async function fetchEtherscanData() {
    try {
        console.log('Fetching from /etherscan-info...');
        const res = await fetch('/etherscan-info');
        const data = await res.json();
        console.log('Fetched data:', data);

        document.getElementById('eth-price').innerHTML = `
      <strong>ETH Price:</strong><br />
      USD: $${data.eth_price.ethusd}<br />
    `;

        document.getElementById('gas-info').innerHTML = `
      <strong>Gas Prices:</strong><br />
      Safe: ${data.gas_info.SafeGasPrice} Gwei<br />
      Proposed: ${data.gas_info.ProposeGasPrice} Gwei<br />
      Fast: ${data.gas_info.FastGasPrice} Gwei
    `;

        const ethSupply = Number(data.eth_supply) / 1e18;
        document.getElementById('eth-supply').innerHTML = `
      <strong>Total ETH Supply:</strong><br />
      ${ethSupply.toLocaleString()} ETH
    `;
    } catch (err) {
        console.error('Failed to fetch or update DOM:', err);
    }
}

window.addEventListener('DOMContentLoaded', fetchEtherscanData);
