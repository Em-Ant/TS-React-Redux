import React, { useState } from 'react';
import Slider from '../../components/Slider';
import { Container, Wrap } from './styled';

const TestPage = () => {
  const [value, setValue] = useState(0);
  return (
    <Container>
      <Wrap>
        <Slider
          value={value}
          step={10}
          onChange={(e) => setValue(Number(e.currentTarget.value))}
          popoverContent={`${value} %`}
        />
      </Wrap>
    </Container>
  );
};

export default TestPage;
