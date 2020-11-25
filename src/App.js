import logo from './logo.svg';
import './App.css';
// import Home from './Components/Home/Home';
import Appbar from './Components/Appbar/Appbar';
import Post from './Components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './Components/Notfound/Notfound';
import Postsummery from './Components/Postsummery/Postsummery';
function App() {
  return (
    <div className="App">
      <Appbar></Appbar>     
      <Router>
        <Switch>
          <Route path="/post">
          <Post></Post>
          </Route>
          <Route exact path="/post">
          <Post></Post>
          </Route>
          <Route exact path="/about/:postId">
            <Postsummery></Postsummery>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
