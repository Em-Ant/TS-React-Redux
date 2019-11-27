import React from 'react';

interface Props {
  name?: string;
}

export default function Playground({
  name = 'test'
}: Props): React.ReactElement {
  return <div>{name}</div>;
}
