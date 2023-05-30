import React from 'react';
import { Link } from 'react-router-dom';

function BottomButton() {
  return (
    <div className='d-flex justify-content-between mt-4'>
      <Link to={'/'}>
        <input
          type='button'
          value='Back'
          className='px-4 py-2 btn btn-outline-secondary'
        />
      </Link>
      <Link to={'/return'}>
        <input
          type='button'
          value='Proceed'
          className='px-4 py-2 mx-2 btn btn-primary'
        />
      </Link>
    </div>
  );
}

export default BottomButton;
