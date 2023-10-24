import React from 'react';
import { Spinner } from 'react-bootstrap';

function TextShimmer() {
  return (
      <>
         <Spinner animation="border" role="status" size='sm'>
        <span className="visually-hidden fs-6">Loading...</span>
         </Spinner>
      </>
  );
}

export default TextShimmer;
