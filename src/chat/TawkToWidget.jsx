import React, { useEffect } from 'react';

const TawkToWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/656d6225bfb79148e599c692/1hgpkep83';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return 
    <>
    h1llo
    </>
};

export default TawkToWidget;
