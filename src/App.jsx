import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import 'typeface-roboto';
import Navbar from './components/Navbar';
import TabSort from './components/Tabbar';
import ChromeTabs from './components/ChromeTabbar';
import { ThemeProvider } from '@material-ui/styles';
import Feed from './components/Feed';
import ButtonBar from './components/ButtonTabs';

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
      <TabSort/>
      {/* <ButtonBar /> */}
    </div>
  </ThemeProvider>
  );
}

export default App;
//#270140   Dark Purple
//#1d0259   Dark Blue
//#0d0126   Deep Purple
//#04d9d9   Light Blue
//#f2a97e   Light Tan