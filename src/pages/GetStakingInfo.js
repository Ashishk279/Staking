import React, { useState } from 'react'

const GetStakingInfo = (props) => {
 const [address, setAddress] = useState('');

 // Function to getting a staker information
 const getStakingInfo = async () => {
  try{
  const getDetails = await props.contract.getStakerInfo(address);
  console.log(getDetails);
  const detail1 = document.getElementById('detail1');
  detail1.innerHTML = `exist: ${getDetails.exist}`;
  const detail2 = document.getElementById('detail2');
  detail2.innerHTML = `stakedAmount: ${getDetails.stakedAmount}`;
  const detail3 = document.getElementById('detail3');
  detail3.innerHTML = `unclaimedRewards: ${getDetails.unclaimedRewards}`;
  const detail4 = document.getElementById('detail4');
  detail4.innerHTML = `claimCheckpoint: ${getDetails.claimCheckpoint}`;
  const detail5 = document.getElementById('detail5');
  detail5.innerHTML = `totalRewardsClaimed: ${getDetails.totalRewardsClaimed}`;
  }
  catch(err){
    alert("Error Occured: ", err);
  }
 }
  return (
    <div className='container '>
      <h1 className='text-center my-3'>Welcome to the Staking Platform</h1>
      <div className='d-flex flex-row mb-3 justify-content-center my-3'>
        <div className="card mx-3" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">Get Staker Info</h5>
            <div className="input-group mb-3">
              <span className="input-group-text">0x</span>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='0x...' required />
            </div>
            <button className="btn btn-primary" type="submit" onClick={getStakingInfo}>GetStakingInfo</button>
          </div>

          <span className='mx-2' id="detail1"></span>
          <span className='mx-2' id="detail2"></span>
          <span className='mx-2' id="detail3"></span>
          <span className='mx-2' id="detail4"></span>
          <span className='mx-2' id="detail5"></span>
          
        </div>
      </div>
    </div>
  )
}

export default GetStakingInfo