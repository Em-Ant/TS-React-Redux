import React, { useState } from 'react';
import { UserProvider, useUser } from './context';
import { WS as Wrap } from './styled';
import Slider from '../../components/Slider';
import { Outlet } from 'react-router-dom';

const _User = () => {
  const [user, changeUser] = useUser();
  return (
    <Wrap>
      <p>(memo)</p>
      {user && (
        <>
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </>
      )}
      {user && <button onClick={changeUser}>change user</button>}
    </Wrap>
  );
};

const User = React.memo(_User);

const User2 = () => {
  const [user] = useUser();
  return (
    <Wrap>
      <p>(no memo)</p>
      {user && (
        <>
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </>
      )}
    </Wrap>
  );
};

export default function Playground() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Outlet />
      <h2>Render Test</h2>
      <Wrap>
        <UserProvider>
          <Wrap>
            <Wrap>
              <Wrap>
                <User />
                <User2 />
              </Wrap>
            </Wrap>
          </Wrap>
          <span>from local state: {count}</span>
          <button onClick={() => setCount(count + 1)}>increase count</button>
        </UserProvider>
        <Slider
          popoverContent="test"
          defaultValue={32}
          onMouseUp={console.log}
        />
      </Wrap>
    </>
  );
}
