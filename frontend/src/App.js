// import logo from './logo.svg';
import './App.css';
import FrontSection from './components/FrontSection';
import Menu from './components/Menu';
import MenuBar from './components/MenuBar';
import "./components/FrontSection.css"
import Promotion from './components/Promotion';
function App() {
  return (
    <div className="App">
      <FrontSection></FrontSection>
      <Promotion></Promotion>
    </div>
  );
}

export default App;
