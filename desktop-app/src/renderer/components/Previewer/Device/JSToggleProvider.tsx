import { createContext, useState } from 'react';

export const JSToggleContext = createContext<IJSToggleContext | null>(null);

const JSToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [allowJavascript, setAllowJavascript] = useState(true);
  return (
    <JSToggleContext.Provider value={{ allowJavascript, setAllowJavascript }}>
      {children}
    </JSToggleContext.Provider>
  );
};

interface IJSToggleContext {
  allowJavascript: boolean;
  setAllowJavascript: React.Dispatch<React.SetStateAction<boolean>>;
}

export default JSToggleProvider;
