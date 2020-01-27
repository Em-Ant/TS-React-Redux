import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { UserProvider, useUser } from './context';
import { WS as Wrap } from './styled';
import { RootState } from 'src/state/reducer';

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
// const User2 = React.memo(_User2);

const _C3 = ({ count }: { count: number }) => (
  <Wrap>
    <p>from reducer (connect): {count}</p>
  </Wrap>
);
const Comp = connect(({ count }: RootState) => ({
  count
}))(_C3);

const getCount = (state: RootState) => state.count;
const Comp2 = () => {
  const count = useSelector(getCount);
  return (
    <Wrap>
      <p>from reducer (useSelector): {count}</p>
    </Wrap>
  );
};
export default function Playground() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h2>Render Test</h2>
      <Wrap>
        <UserProvider>
          <Wrap>
            <Wrap>
              <Wrap>
                <User />
                <User2 />
                <Comp />
                <Comp2 />
              </Wrap>
            </Wrap>
          </Wrap>
          <span>from local state: {count}</span>
          <button onClick={() => setCount(count + 1)}>increase count</button>
        </UserProvider>
      </Wrap>
    </>
  );
}
