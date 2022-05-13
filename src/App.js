import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import ClockFeature from './features/Clock';
import HeroFeature from './features/Hero';
import MagicBoxFeature from './features/MagicBox';
import PostFeatures from './features/PostList/Index';
import TodoListFeature from './features/TodoList';

function App() {
  return (
    <div className="app">
      <p>Header</p>

      <p className='link-list'><Link to="/clock">Clock</Link></p>
      <p className='link-list'><Link to="/hero">Hero</Link></p>
      <p className='link-list'><Link to="/magicbox">Magic box</Link></p>
      <p className='link-list'><Link to="/post">Post List</Link></p>
      <p className='link-list'><Link to="/todo">Todo List</Link></p>
      <p>

      </p>

      <p className='link-list'><NavLink to="/clock">Clock</NavLink></p>
      <p className='link-list'><NavLink to="/hero">Hero</NavLink></p>
      <p className='link-list'><NavLink to="/magicbox">Magic box</NavLink></p>
      <p className='link-list'><NavLink to="/post">Post List</NavLink></p>
      <p className='link-list'><NavLink to="/todo">Todo List</NavLink></p>

      <Route path="/clock" component={ClockFeature} />
      <Route path="/hero" component={HeroFeature} />
      <Route path="/magicbox" component={MagicBoxFeature} />
      <Route path="/post" component={PostFeatures} />
      <Route path="/todo" component={TodoListFeature} />

      Footer

      {/* <h1>Clock</h1>
      <ClockFeature />
      <h1>To Do List</h1>
      <TodoListFeature />
      <h1>Post List - Get API và phân trang đơn giản</h1>
      <PostFeatures />
      <h1>Magic Box</h1>
      <MagicBoxFeature />
      <h1>Hero</h1>
      <HeroFeature /> */}


      {/* <ColorBox />
      <TodoListFeature /> */}

    </div>
  );
}

export default App;
