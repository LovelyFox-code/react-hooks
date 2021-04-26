import React, { useState } from 'react';
import './App.css';
import Main from './Main';
import Alert from './Alert';

const AlertContext = React.createContext();

function App() {
  const [alert, setAlert] = useState(false);
  return (
    <AlertContext.Provider value={alert}>
       <div className={'container pt-3'}>
     <Alert />
     <Main />
     
       </div>
    </AlertContext.Provider>
  
  );
}

export default App;
