import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import AlbumFeature from './features/Album';
import ClockFeature from './features/Clock';
import CounterFeature from './features/Counter';
import HeroFeature from './features/Hero';
import MagicBoxFeature from './features/MagicBox';
import PostFeatures from './features/PostList/Index';
import ProductFeature from './features/Product/index';
import TodoListFeature from './features/TodoList';


//CSS in JS
const Title = styled.h1`
  text-align:center;
  font-weight:bold;
  color: ${props => props.color || 'green'};
`;


function App() {
  // useEffect(()=>{
  //   const fetchProducts = async()=>{
  //     const params = {
  //       _limit:10,
  //     }
  //     const productList = await productAPI.getAll(params);
  //     console.log(productList);

  //   }

  //   fetchProducts();
  // },[]);

  return (
    <div className="app">
      <Header />
      {/* <Title color='goldenrod'>HEADING</Title> */}

      {/* <p className='link-list'><Link to="/clock">Clock</Link></p>
      <p className='link-list'><Link to="/hero">Hero</Link></p>
      <p className='link-list'><Link to="/magicbox">Magic box</Link></p>
      <p className='link-list'><Link to="/post">Post List</Link></p>
      <p className='link-list'><Link to="/todo">Todo List</Link></p> */}

      {/* <p className='link-list'><NavLink to="/clock">Clock</NavLink></p>
      <p className='link-list'><NavLink to="/hero">Hero</NavLink></p>
      <p className='link-list'><NavLink to="/magicbox">Magic box</NavLink></p>
      <p className='link-list'><NavLink to="/post">Post List</NavLink></p>
      <p className='link-list'><NavLink to="/todos-list">Todo List</NavLink></p>
      <p className='link-list'><NavLink to="/counter">Counter</NavLink></p>
      <p className='link-list'><NavLink to="/album">Album</NavLink></p> */}

      {/* cái Switch nó hiển thị cái route nào math với cái path và chỉ lấy
      duy nhất cái đầu tiên */}
      {/* exact mặc định là false nhưng khi nhập vô thì là true */}
      <Switch>
        {/* <Redirect from='/home' to='/' /> */}
        <Redirect from='/home' to='/' exact />
        <Redirect from='/post-list/:postID' to='/posts/:postID' />

        <Route path="/" component={ProductFeature} exact />
        <Route path="/clock" component={ClockFeature} exact />
        <Route path="/hero" component={HeroFeature} exact />
        <Route path="/magicbox" component={MagicBoxFeature} exact />
        <Route path="/post" component={PostFeatures} exact />
        <Route path="/todos-list" component={TodoListFeature} />
        <Route path="/counter" component={CounterFeature} />
        <Route path="/album" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />

        {/* <Route component={NotFound} /> */}
      </Switch>


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