import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <h1>Create account</h1>
          <label htmlFor="name">Your name
            <input type="text" value="" name="name" />
          </label>
          <label htmlFor="email">Email
            <input type="text" value="" name="email" />
          </label>
          <label htmlFor="password">Password
            <input type="password" value="" name="password" />
          </label>
          <label htmlFor="repassword">Re-enter password
            <input type="password" value="" name="repassword" />
          </label>
          <button>Create your Amazon account</button>
        </form>
      </header>
    </div>
  );
}

export default App;
