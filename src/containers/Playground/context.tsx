import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  useMemo,
  useCallback
} from 'react';

const UserContext = React.createContext<any>(undefined);

type Props = {
  children: ReactNode;
};
const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any | null>(null);

  const getUser = useCallback(async num => {
    const url = `https://jsonplaceholder.typicode.com/users/${num}`;
    const data = await fetch(url).then(r => r.json());
    setUser(data);
  }, []);

  useEffect(() => {
    getUser(1);
  }, [getUser]);

  const changeUser = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    getUser(randomNumber);
  }, [getUser]);

  const data = useMemo(() => [user, changeUser], [user, changeUser]);

  return (
    <UserContext.Provider value={data}>
      <span>user provider</span>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser can only be used inside UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
