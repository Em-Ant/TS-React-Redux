/* eslint-disable react-refresh/only-export-components */

import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type UserCtx = [User | null, () => void];

export const UserContext = React.createContext<UserCtx>([
  null,
  () => {
    /* noop */
  },
]);

interface Props {
  children: ReactNode;
}
const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const getUser = useCallback(async (num: number) => {
    const url = `https://jsonplaceholder.typicode.com/users/${num}`;
    const data = (await fetch(url).then((r) => r.json())) as User;
    setUser(data);
  }, []);

  useEffect(() => {
    void getUser(1);
  }, [getUser]);

  const changeUser = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    void getUser(randomNumber);
  }, [getUser]);

  const data = useMemo(
    () => [user, changeUser] satisfies UserCtx,
    [user, changeUser],
  );

  return (
    <UserContext value={data}>
      <span>user provider</span>
      {children}
    </UserContext>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser can only be used inside UserProvider');
  }
  return context;
};

export { UserProvider };
