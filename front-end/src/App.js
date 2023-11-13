import AddButton from './components/MyButton/AddButton';
import Favorites from './components/favorites/favorites';
import Header from './components/header/Header';
import Background from './components/main_background/background';
import Calendar from 'react-calendar'
import common from "./styles/common.css"
function App() {
  
  return (
    <>
      <Header/>
      <Background/>
      <Favorites/>
    </>
  );
}

export default App;