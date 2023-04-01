import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface ILanguage {
  isEnglish: boolean;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<ILanguage>({
  isEnglish: true,
  toggleLanguage: () => {},
});

interface ILanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<ILanguageProviderProps> = ({ children }) => {
  const [state, setState] = useState<ILanguage>(() => {
    // Initialize isEnglish state with localStorage value, or default to true
    const storedIsEnglish = localStorage.getItem("isEnglish");
    const initialIsEnglish = storedIsEnglish
      ? JSON.parse(storedIsEnglish)
      : true;

    // Return state object with isEnglish and toggleLanguage function
    return {
      isEnglish: initialIsEnglish,
      toggleLanguage: () => {
        setState((prevState) => ({
          ...prevState,
          isEnglish: !prevState.isEnglish,
        }));
      },
    };
  });

  // Update localStorage value when isEnglish state changes
  useEffect(() => {
    localStorage.setItem("isEnglish", JSON.stringify(state.isEnglish));
  }, [state.isEnglish]);

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};
