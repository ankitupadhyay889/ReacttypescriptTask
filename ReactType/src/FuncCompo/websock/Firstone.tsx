import React, {useEffect} from 'react';

const Firstone = () => {
  
  useEffect(() => {
    let ws = new WebSocket('wss://ws.kraken.com/');
    ws.onopen = () => console.log('ws opened');
    ws.onclose = () => console.log('ws closed');

    ws.onmessage = e => {
      const message = JSON.parse(e.data);
      console.log('e', message);
    }

    return () => {
      ws.close();
    }
  }, []);

  return (
    <div>hooks + ws</div>
  )
}

export default Firstone;