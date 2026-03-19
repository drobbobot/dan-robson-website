'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { wordOrder, type WordKey } from './wordStyles';

interface WordContextValue {
  activeWord: WordKey;
  setActiveWord: (word: WordKey) => void;
  advanceIndex: () => void;
  index: number;
}

const WordCtx = createContext<WordContextValue>({
  activeWord: 'intentional',
  setActiveWord: () => {},
  advanceIndex: () => {},
  index: 0,
});

export function WordProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);

  const setActiveWord = useCallback((word: WordKey) => {
    const i = wordOrder.indexOf(word);
    if (i !== -1) setIndex(i);
  }, []);

  const advanceIndex = useCallback(() => {
    setIndex((i) => (i + 1) % wordOrder.length);
  }, []);

  return (
    <WordCtx.Provider value={{ activeWord: wordOrder[index], setActiveWord, advanceIndex, index }}>
      {children}
    </WordCtx.Provider>
  );
}

export const useWord = () => useContext(WordCtx);
