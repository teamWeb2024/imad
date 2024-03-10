import MovieList from './movie/MovieList';
import Navbar from './movie/Navbar';
import Header from "./components/Header"
import Meme from "./components/Meme"


function App() {
  return (
    <div className="App">
      {/* <FunctionC name="ahmad" age="30"/>
      <ClassC name="imad" age="40"/>
      <ManageState/>
      <Hooks/>
      <Arrays/> */}
      <Navbar/>
      <MovieList/>
      <Header />
      <Meme />
    </div>
  );
}

export default App;