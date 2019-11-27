import React, { ReactNode } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Paper from './Paper';

interface Props {
  children?: ReactNode;
}

const PaperMatch: React.FC<Props> = ({ children }) => {
  const match = useRouteMatch<{ type: string }>({
    path: '/playground/test/:type'
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
