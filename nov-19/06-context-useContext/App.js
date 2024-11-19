import React, { createContext } from 'react';
import CompA from './CompA'
export const context=createContext()

export default function App() {
    let uid="SPA"
  return (
    <>
    <h1>React Context</h1>
    <h2>App Component</h2>
    <context.Provider value={uid}>
    <CompA/>
    </context.Provider>
    </>
  );
}
