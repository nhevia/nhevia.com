import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export interface IThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<IThemeContext>(null!);

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState('theme-dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// optional import - instead of useContext(ThemeContext) inside every component logic
export function useThemeContext() {
  return useContext(ThemeContext);
}
