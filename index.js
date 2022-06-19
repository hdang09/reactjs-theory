import React from 'react';
import ReactDOM from 'react-dom/client';

import UseState from './UseState';
import TwoWayBinding from './TwoWayBinding';
import TodoListWithUseState from './TodoListWithUseState';
import UseEffect from './UseEffect';
import UseLayoutEffect from './UseLayoutEffect';
import UseRef from './UseRef';
import UseCallback from './UseCallback';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';
import TodoListWithUseReducer from './UseReducer/index';

import UseContext from './UseContext';
import { ThemeProvider } from './UseContext/ThemeContext'

import ContextWithUseReducer from './ContextWithUseReducer';
import { StoreProvider } from './store'

import UseInperativeHandle from './UseInperativeHandle';
import CSSModules from './CSSModules';


import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseState /> */}
    {/* <TwoWayBinding /> */}
    {/* <TodoListWithUseState /> */}
    {/* <UseEffect /> */}
    {/* <UseLayoutEffect /> */}
    {/* <UseRef /> */}
    {/* <UseCallback /> */}
    {/* <UseMemo /> */}
    {/* <UseReducer /> */}
    {/* <TodoListWithUseReducer /> */}

    <ThemeProvider>
      {/* <UseContext /> */}
    </ThemeProvider>

    <StoreProvider>
      {/* <ContextWithUseReducer /> */}
    </StoreProvider>

    {/* <UseInperativeHandle /> */}
    {/* <CSSModules /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
