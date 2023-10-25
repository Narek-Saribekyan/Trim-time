import Favorites from './components/favorites/favorites';
import Header from './components/header/Header';
import Background from './components/main_background/background';
import common from "./styles/common.css"
function App() {
  
  return (
    <>
      <Header />
      <Background/>
      <Favorites/>
    </>
  );
}

export default App;
