import React from 'react';

const Card = ({ data, index }) => {
  console.log(data, index);
  return (
    <div
      className='card text-bg-dark m-4'
      style={{ maxWidth: '18rem' }}
      key={index}
    >
      <div className='card-header'>{data.empName}</div>
      <div className='card-body'>
        <h5 className='card-title'>{data.role}</h5>
        <p className='card-text'>{data.Id}</p>
      </div>
    </div>
  );
};

export default Card;
