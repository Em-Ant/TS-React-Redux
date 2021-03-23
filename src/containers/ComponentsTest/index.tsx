import React, { useState } from 'react';
import Slider from '../../components/Slider';
import { Container } from './styled';

const TestPage = () => {
  const [value, setValue] = useState(0);
  return (
    <Container>
      <Slider
        value={value}
        step={10}
        onChange={(e) => setValue(Number(e.currentTarget.value))}
        popoverContent={`${value} %`}
      />
    </Container>
  );
};

export default TestPage;
