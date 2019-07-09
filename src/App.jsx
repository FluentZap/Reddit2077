import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import 'typeface-roboto';
import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a9c9ea',
    },
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

function App() {
  return (
  <ThemeProvider theme={theme}>
    <div className="App">    
      <Navbar/>
      <Tabbar/>
    </div>
  </ThemeProvider>
  );
}

export default App;
