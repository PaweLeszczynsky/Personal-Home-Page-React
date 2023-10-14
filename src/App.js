import { ThemeProvider } from 'styled-components';
import './App.css';
import BodyContainer from './common/bodyContainer';
import { GlobalStyle } from './globalStyle';
import { DarkTheme, LightTheme } from './theme';
import { useDarkLightState } from './common/getDarkLightState';

const App = () => {
  const [darkLightState, changeVal] = useDarkLightState();
  return (
    <ThemeProvider theme={darkLightState ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <BodyContainer changeVal={changeVal} darkLightState={darkLightState}/>
    </ThemeProvider >
  )
};

export default App;