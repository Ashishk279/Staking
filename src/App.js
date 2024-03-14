import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetDetails from './pages/GetDetails';
import GetStakingInfo from './pages/GetStakingInfo';
import Home from './pages/Home';
import abi from './utils/stakingABI.js'
import address from './utils/stakingAddress.js';
import ercABI from './utils/erc20ABI.js';
import erc20Address from './utils/erc20Address.js';
import { ethers } from 'ethers';

function App() {
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();
  const [contract, setContract] = useState();
  const [ercContract, setercContract] = useState();

  // Function to connect metamask
  const connectToMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        console.log(provider)

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);

        const balance = await window.ethereum.request({
          "method": "eth_getBalance",
          "params": [
            accounts[0],
            'latest'
          ]
        });
        setBalance(ethers.formatEther(balance));
        console.log(ethers.formatEther(balance))
        
        const signer = await provider.getSigner(accounts[0]);
        console.log(signer)
        
        // Instance of staking contract
        const stakingContractInstance = new ethers.Contract(address, abi, signer);
        console.log(stakingContractInstance)
        setContract(stakingContractInstance);
        
        // Instance of Erc20 contract
        const ercContractInstance = new ethers.Contract(erc20Address, ercABI, signer);
        console.log(ercContractInstance);
        setercContract(ercContractInstance);
      } catch (error) {
        alert('You are not connected with metamask. Please try again:', error.message);
      }
    }
    else {
      alert("You neet to install Metamask.")
    }
  }
  return (
    <div >
      <Router>
        <Navbar account={account} balance={balance} connectToMetaMask={connectToMetaMask} />
        <Routes>
          <Route exact path="/" element={<Home account={account} contract={contract} ercContract={ercContract}/>}></Route>
          <Route exact path="/getDetails" element={<GetDetails account={account} contract={contract} />}></Route>
          <Route exact path="/getStakingInfo" element={<GetStakingInfo contract={contract}/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
