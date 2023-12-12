import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import '../styles/highlight.css';

function Highlight({ data }) {
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const highlightElement = document.querySelector('.highlight');
      if (highlightElement) {
        const rect = highlightElement.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100;

        if (isVisible && !counting) {
          setCounting(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [counting]);

  const formatNumber = (number) =>{
    const formattedNumber = String(number).replace(/\B(?=(\d{3})+(?!\d))/g, '');


  }
  const [year, setYear] = useState(2011);

  useEffect(() => {
    if (!counting) {
      setYear(2011);
    }
  }, [counting]);
  const handleEnd = () => {
    setCounting(false);
  };

  return (
    <div className="p-2">
      <div className="container highlight bg-dark-gray overflow-hidden p-0">
        <div className="row align-items-center justify-content-center">
          <div className="col-6 col-md-4 col-lg-3 border h-100">
            <div className="highlight-card-hero ">
              <small className={`fs-3 d-flex gap-1 d-block justify-content-center align-items-center w-100  text-white ${counting ? 'counting' : ''}`}>
               <small className='fs-6'>
               {counting ? (
                  <CountUp start={0} end={data[0]?.rating ? data[0]?.rating : 4.6} duration={2} decimals={1} />
                ) : (
                  data[0]?.rating ? data[0]?.rating : 4.6
                )}{' '}
               </small>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-half text-yellow"></i>
              </small>
              <span className="p-dark-small text-white">
                <small>Google Rating</small>
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 border h-100">
            <div className="highlight-card-hero ">
              <h1 className={`fs-3 text-900 text-white ${counting ? 'counting' : ''}`}>
                {counting ? (
                  <CountUp start={0} end={data[0]?.partners ? data[0]?.partners : 300} duration={2} decimal={0} />
                ) : (
                  data[0]?.partners ? data[0]?.partners : 300
                )}{' '}
                +
              </h1>
              <span className="p-dark-small text-white">
                <small>Hiring Partners</small>
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 border h-100">
            <div className="highlight-card-hero">
              <h1 className={`fs-3 text-900 text-white ${counting ? 'counting' : ''}`}>
                {counting ? (
                  <CountUp start={0} end={4.5} duration={2} decimals={0} />
                ) : (
                  4.5
                )}{' '}
                 <small>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-half text-yellow"></i>
              </small>
              </h1>
              <span className="p-dark-small text-white">
                <small>JustDial</small>
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 h-100">

            <div className="highlight-card-hero">

              <h1 className={`fs-3 text-900 text-white ${counting ? 'counting' : ''}`}>
              {counting ? <CountUp start={0} end={2011} duration={5} decimal={0}   formattingFn={(value) => value.toLocaleString('en-US', { useGrouping: false })}
        onComplete={handleEnd}/> : 2011}


              </h1>
              <span className="p-dark-small text-white">
                <small>Since</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
