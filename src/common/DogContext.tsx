import React, { useState, ReactNode } from "react";

export type ActiveBreedContext = {
  setActiveBreed: (breed: string) => void;
  activeBreed: string | null;
};

type ActiveBreedProviderProps = {
  children: ReactNode | undefined;
};

const activeBreedContext = React.createContext<ActiveBreedContext | undefined>(
  undefined
);

export default function ActiveBreedProvider({
  children,
}: ActiveBreedProviderProps) {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  const contextValue: ActiveBreedContext = {
    activeBreed: selectedBreed,
    setActiveBreed: setSelectedBreed,
  };

  return (
    <activeBreedContext.Provider value={contextValue}>
      {children}
    </activeBreedContext.Provider>
  );
}

export function useActiveBreed(): ActiveBreedContext {
  const context = React.useContext(activeBreedContext);

  if (context === undefined) {
    throw new Error("Wrap your component with ActiveBreedProvider.");
  }

  return context;
}
