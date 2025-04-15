# 🚀 EtherTrack

An API showcase built using **HTML**, **CSS**, and **Node.js**.

## 🔗 API

[Etherscan API](https://etherscan.io/login)

## 🛠️ TODO

- [ ] Build out UI components to display blockchain data  
- [ ] Add support for additional Etherscan API endpoints  
- [ ] Implement error handling for API responses  
- [ ] Improve visual styling and layout  
- [ ] Add mobile responsiveness  
- [ ] Include a loading state/spinner during fetch operations  

## 📦 How To Use

1. **Install Node.js and NPM**  
   Download and install from: https://nodejs.org

2. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ethertrack.git
   cd ethertrack
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Install required packages**

   ```bash
   npm install dotenv express nodemon
   ```

5. **Create a `.env` file** in the root directory and add your Etherscan API key:

   ```
   ETHERSCAN_API_KEY=your_api_key_here
   ```

6. **Run the app in development mode**

   ```bash
   npm run dev
   ```

<!-- ## 📁 Project Structure -->
<!---->
<!-- ``` -->
<!-- ethertrack/ -->
<!-- ├── public/ -->
<!-- │   └── index.html -->
<!-- ├── src/ -->
<!-- │   └── server.js -->
<!-- ├── .env -->
<!-- ├── package.json -->
<!-- └── README.md -->
<!-- ``` -->

## 📝 Notes

- This project uses:
  - **Express** for server-side routing
  - **Dotenv** for environment variable management
  - **Nodemon** for automatic server restarts during development
- Make sure your `.env` file is listed in `.gitignore` to avoid exposing API keys

## 💡 License

This project is open-source and available under the [MIT License](./LICENSE).

