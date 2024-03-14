import React from 'react'
// import {ethers} from 'ethers';
const GetDetails = (props) => {

  // Function to getting a details
  const getDetails = async () => {
    try {
      const getDetails = await props.contract.getDetails({from: props.account});
      console.log(getDetails);
      const detail1 = document.getElementById('detail1');
      detail1.innerHTML = `isPaused: ${getDetails.isPaused}`;
      const detail2 = document.getElementById('detail2');
      detail2.innerHTML = `resetClaimDelay: ${getDetails.resetClaimDelay}`;
      const detail3 = document.getElementById('detail3');
      detail3.innerHTML = `stakeToken: ${getDetails.stakeToken}`;
      const detail4 = document.getElementById('detail4');
      detail4.innerHTML = `rewardToken: ${getDetails.rewardToken}`;
      const detail5 = document.getElementById('detail5');
      detail5.innerHTML = `startBlock: ${getDetails.startBlock}`;
      const detail6 = document.getElementById('detail6');
      detail6.innerHTML = `endBlock: ${getDetails.endBlock}`;
      const detail7 = document.getElementById('detail7');
      detail7.innerHTML = `claimDelay: ${getDetails.claimDelay}`;
      const detail8 = document.getElementById('detail8');
      detail8.innerHTML = `totalRewards: ${getDetails.totalRewards}`;
      const detail9 = document.getElementById('detail9');
      detail9.innerHTML = `totalFundsStaked: ${getDetails.totalFundsStaked}`;
      const detail10 = document.getElementById('detail10');
      detail10.innerHTML = `totalRewardsDistributed: ${getDetails.totalRewardsDistributed}`;

    } catch (err) {
      alert("Error Occured: ",err)
    }
  }
  return (
    <div className='container '>
      <h1 className='text-center my-3'>Welcome to the Staking Platform</h1>
      <div className='d-flex flex-row mb-3 justify-content-center my-3'>
        <div className="card mx-3" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">Get Details</h5>
            <button className="btn btn-primary" type="submit" onClick={getDetails}>GetDetails</button>
          </div>

          <span className='mx-2' id="detail1"></span>
          <span className='mx-2' id="detail2"></span>
          <span className='mx-2' id="detail3"></span>
          <span className='mx-2' id="detail4"></span>
          <span className='mx-2' id="detail5"></span>
          <span className='mx-2' id="detail6"></span>
          <span className='mx-2' id="detail7"></span>
          <span className='mx-2' id="detail8"></span>
          <span className='mx-2' id="detail9"></span>
          <span className='mx-2' id="detail10"></span>

        </div>
      </div>
    </div>
  )
}

export default GetDetails