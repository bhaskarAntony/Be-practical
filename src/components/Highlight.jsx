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

  return (
    <div className="p-2">
      <div className="container highlight bg-dark-gray mb-4">
        <div className="blur-highlight"></div>
        <div className="row align-items-center justify-content-center">
          <div className="col-6 col-md-4 col-lg-3 mb-3">
            <div className="highlight-card-hero">
              <h1 className={`fs-1 text-900 text-white ${counting ? 'counting' : ''}`}>
                {counting ? (
                  <CountUp start={0} end={data[0]?.rating ? data[0]?.rating : 4.7} duration={2} decimals={0} />
                ) : (
                  data[0]?.rating ? data[0]?.rating : 4.7
                )}{' '}
                <i className="bi bi-star-fill text-yellow"></i>
              </h1>
              <span className="p-dark-small text-white">
                <small>Google Rating</small>
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 mb-3">
            <div className="highlight-card-hero ">
              <h1 className={`fs-1 text-900 text-white ${counting ? 'counting' : ''}`}>
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

          <div className="col-6 col-md-4 col-lg-3 mb-3">
            <div className="highlight-card-hero">
              <h1 className={`fs-1 text-900 text-white ${counting ? 'counting' : ''}`}>
                {counting ? (
                  <CountUp start={0} end={data[0]?.minSalary ? data[0]?.minSalary : 7.8} duration={2} decimals={0} />
                ) : (
                  data[0]?.minSalary ? data[0]?.minSalary : 7.8
                )}{' '}
                LPA
              </h1>
              <span className="p-dark-small text-white">
                <small>average dream job CTC</small>
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 mb-3">

            <div className="highlight-card-hero">

              <h1 className={`fs-1 text-900 text-white ${counting ? 'counting' : ''}`}>
                {counting ? <CountUp start={0} end={2011} duration={2} decimal={0} /> : 2011}
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
