import React, { useEffect } from 'react';

const N = () => {
  useEffect(() => {
    // Check if the browser supports service workers
    if ('serviceWorker' in navigator) {
        console.log(true)
      window.addEventListener('load', async () => {
        try {
          const registration = await navigator.serviceWorker.register('/service-worker.js');
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        } catch (err) {
          console.error('ServiceWorker registration failed: ', err);
        }
      });
    } else {
      console.log('Service workers are not supported.');
    }
  }, []);

  const handleSubscribe = async () => {
    try {
      console.log('clicked');
      const serviceWorker = await navigator.serviceWorker.ready;
      const subscription = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BCNoSOMeo80WNdFQ-uOL9GjWcSpHc03w83fCkZIXnNSgIMSPSOE-F35DeTCjLn8DaKPNo1N10RLOLXWet_R_THQ',
      });
      console.log('Subscription:', JSON.stringify(subscription));
      // Send the subscription object to the backend to store it
      // You can use Axios or fetch API for this purpose
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };
  

  return (
    <div>
      <h1>Web Push Notifications Example</h1>
      <button onClick={handleSubscribe}>Subscribe to Push Notifications</button>
    </div>
  );
};

export default N;
