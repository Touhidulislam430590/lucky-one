import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
    return (
        <div className="App">
          <Header></Header>
          <Shop></Shop>
          <Article></Article>
        </div>
    );
}

export default App;
