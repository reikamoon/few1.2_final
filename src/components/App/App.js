import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';
import MetalMeta from '../MetalMeta/MetalMeta';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={MetalMeta}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;