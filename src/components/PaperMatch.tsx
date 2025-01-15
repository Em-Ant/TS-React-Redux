import React, { ReactNode } from 'react';
import { useMatch } from 'react-router';
import Paper from './Paper';

interface Props {
  children?: ReactNode;
}

const PaperMatch: React.FC<Props> = ({ children }) => {
  const match = useMatch({
    path: '/playground/test/:type',
  });
  const _type = match?.params.type ?? 'nothing';
  return (
    <Paper>
      {`route matches: ${_type}`}
      <p>{children}</p>
    </Paper>
  );
};

export default PaperMatch;
