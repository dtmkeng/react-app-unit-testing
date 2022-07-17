import { createContext, useEffect, useState } from "react";

const AuthContext = createContext<{
  user?: string | undefined;
  isAdmin?: boolean;
}>({});
type Props = {
  children: JSX.Element | any;
};
export function AuthProvider({ children }: Props): JSX.Element {
  const [user, setUser] = useState<string | undefined>();

  const isAdmin = () => true;

  useEffect(() => {
    setUser("keng");
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isAdmin: isAdmin() }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
