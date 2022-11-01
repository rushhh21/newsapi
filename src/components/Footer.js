import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-left text-light'>
      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-success fw-bold' target="_blank" href='https://techbytesss.shop/'>
            Tech Bytes.
        </a>
      </div>
    </MDBFooter>
  );
}