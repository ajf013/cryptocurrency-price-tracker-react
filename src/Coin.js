import React from 'react';
import './Coin.css';

const Coin = ({ name, price, symbol, marketcap, volume, image, priceChange, marketcaprank, lastupdated }) => {  
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>Price: ${price}</p>
          <p className='coin-volume'> Volume: ${volume.toLocaleString()}</p>
          <p className='coin-lastupdated'> Last-Updated: ${lastupdated}</p>
          {priceChange < 0 ? (
            <p className='coin-percent red'>Percentage: ${priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>Percentage: ${priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>

          <p className='coin-marketcaprank'> Marketcap-Rank: ${marketcaprank.toLocaleString()}</p>

        </div>
      </div>
    </div>
  );
};

export default Coin;