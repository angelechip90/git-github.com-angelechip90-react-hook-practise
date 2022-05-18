// import { makeStyles } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import countModule from './counter.module.css';
import { decrease, increase } from './counterSlice';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg,#FE6B8B 30%, #F8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255,105,135,3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

CounterFeature.propTypes = {};

function CounterFeature(props) {
  //const classes = useStyles();
  const dispath = useDispatch();
  const counter = useSelector((state) => state.count);
  const handleIncreaseClick = () => {
    const action = increase(); //action creator
    console.log(action);
    dispath(action);
  };
  const handleDecreaseClick = () => {
    const action = decrease();
    dispath(action);
  };

  return (
    <div className={countModule.counter}>
      <h1>Counter On Redux</h1>
      Counter: {counter}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
