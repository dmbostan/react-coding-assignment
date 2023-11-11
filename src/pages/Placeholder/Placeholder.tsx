import { useState } from 'react';
import './Placeholder.css';
import { Logos, Paragraph, Heading, Button } from '@features/placeholder/components/index.ts';

const Placeholder = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Logos />
      <Heading as="h1">Vite + React</Heading>
      <div className="card">
        <Button clickHandler={() => setCount((count) => count + 1)}>count is {count}</Button>
        <Paragraph>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Paragraph>
      </div>
      <Paragraph className="read-the-docs">Click on the Vite and React logos to learn more</Paragraph>
    </>
  );
};

export default Placeholder;
