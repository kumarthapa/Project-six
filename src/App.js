import Home from "./component/Home";
import {AuthProvider} from './component/context/Authcontext';
import './App.css';

function App() {
  return (
    <div className="App">
    <AuthProvider>
        <Home/>
    </AuthProvider>
    
    </div>
  );
}

export default App;
