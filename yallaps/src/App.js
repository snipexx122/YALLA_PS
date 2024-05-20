
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm';

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="App">
        
        <RegistrationForm />
      </div>
    </div>  
  );
}

export default App;
