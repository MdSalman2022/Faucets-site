import React from 'react';
import Wallet from '../Wallet/Wallet';
import './Home.css'

const Home = () => {
    return (
        <div className=' bg'>
            <p className='notice-bg p-4 text-center text-white  '>Notice Here</p>

            <div className="content container">
                <h1 className='text-color'>Request testnet LINK</h1>
                <p className='w-50 pt-3'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
                <Wallet></Wallet>
                <br />
            </div>


        </div>
    );
};

export default Home;