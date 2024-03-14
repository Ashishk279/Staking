import React, { useState } from 'react'
import {ethers} from 'ethers';
import address from '../utils/stakingAddress.js';
const Home = (props) => {
    const [userInput, setUserInput] = useState('');

    // Function of stake tokens
    const stakeEthers = async () => {
        const amount = ethers.parseUnits(userInput.toString(), 6)
        console.log(amount);
        try {
            const approve = await props.ercContract.approve(address, amount);
            console.log(approve);
            await approve.wait();
            const stake = await props.contract.stake(amount , {from: props.account});
            await stake.wait();
            console.log(stake);
            alert(`Your tokens successfully on stake: ${stake.hash}`);
        } catch (error) {
            alert(`There is some error: ${error.reason}`)
        }
    }
    
    // Function of unstake tokens
    const unStakeEthers = async () => {
        try {
            const unStake = await props.contract.unstake({from: props.account});
            await unStake.wait();
            console.log(unStake);
            alert(`Your tokens successfully unstake: ${unStake.hash}`);
        } catch (error) {
            alert(`There is some error: ${error.reason}`)
        }
    }

    // Function of claim rewards
    const claimRewards = async () => {
        try {
            const claimRewards = await props.contract.claimRewards({from: props.account});
            await claimRewards.wait();
            console.log(claimRewards);
            alert(`Your tokens successfully claimed: ${claimRewards.hash}`);
        } catch (error) {
            console.log("There is some error: ", error.reason);
            alert(`Error Occured: ${error.reason}`)
        }
    }
    return (
        <div className='container '>
            <h1 className='text-center my-3'>Welcome to the Staking Platform</h1>
            <div className='d-flex flex-row mb-3 justify-content-center my-3'>
                <div className="card mx-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Stake Ethers</h5>
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" value={userInput} onChange={(e) => setUserInput(e.target.value)} required/>
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={stakeEthers}>Stake</button>
                    </div>
                </div>
                <div className="card mx-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Unstake</h5>
                        <button className="btn btn-primary" type="submit" onClick={unStakeEthers}>Unstake</button>
                    </div>
                </div>
                <div className="card mx-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Claim Reward</h5>
                        <button className="btn btn-primary" type="submit" onClick={claimRewards}>Claim</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home