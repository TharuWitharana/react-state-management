import type { ReactNode } from 'react';
import React, { createContext, useContext, useReducer } from 'react';

// Define the state type
type LaptopState = {
  laptops: number;
};

// Define the action types
type LaptopAction = 
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number }
  | { type: 'reset' };

// Define the context type
type LaptopContextType = {
  state: LaptopState;
  dispatch: React.Dispatch<LaptopAction>;
};

// Initial state
const initialState: LaptopState = {
  laptops: 0
};

// Create the context
const LaptopContext = createContext<LaptopContextType | undefined>(undefined);

// Reducer function
const laptopReducer = (state: LaptopState, action: LaptopAction): LaptopState => {
  switch (action.type) {
    case 'increment':
      return { ...state, laptops: state.laptops + action.payload };
    case 'decrement':
      return { ...state, laptops: Math.max(0, state.laptops - action.payload) };
    case 'reset':
      return { ...state, laptops: 0 };
    default:
      return state;
  }
};

// Provider component
export const LaptopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(laptopReducer, initialState);
  
  return (
    <LaptopContext.Provider value={{ state, dispatch }}>
      {children}
    </LaptopContext.Provider>
  );
};

// Custom hook to use the laptop context
export const useLaptopContext = () => {
  const context = useContext(LaptopContext);
  if (context === undefined) {
    throw new Error('useLaptopContext must be used within a LaptopProvider');
  }
  return context;
};
