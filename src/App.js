import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      console.log('text: ', text);
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;