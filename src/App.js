import logo from './logo.svg';
import './App.css';
import {Cart} from './Cart/Cart';
import {Shop} from './Cart/Shop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
          My Shopping Cart
        </span>
      </header>

      <div className={"Main"}>
        <Cart />
        <Shop />
      </div>

    </div>
  );
}

export default App;
