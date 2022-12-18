
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar'
import Navbar2 from './Components/Navbar/Navbar2';
// import WomenCarousel from './Pages/Women/WomenCarousel';
import Allroutes from './Routes/Allroutes';
// import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <Allroutes />
      {/* <WomenCarousel /> */}
    </div>
  );
}

export default App;
