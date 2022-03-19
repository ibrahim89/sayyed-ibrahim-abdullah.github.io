import './App.css';
import * as actions from './store/actionCreators';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Dashboard from './components/Dashboard';
import { HashRouter } from 'react-router-dom';
import React from 'react';

const App = () => {
  const theme = useSelector((state: AppState) => state.theme, shallowEqual);
  const dispatch = useDispatch();
  const toggleTheme = React.useCallback(() => dispatch(actions.toggleTheme()), [dispatch]);
  return (
      <div className="App">
        <ThemeProvider theme={createTheme(theme)}>
          <HashRouter>
            <Dashboard toggleTheme={toggleTheme}/>
          </HashRouter>
        </ThemeProvider>
      </div>
  );
};

export default App;
