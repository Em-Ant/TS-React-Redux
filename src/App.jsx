import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Bear from '../assets/Bear.svg';
import Date from './Date';

import { asyncAction } from './state';


const fakeCall = asyncAction(
  async (dispatch) => {
    dispatch({ type: 'START' });
    return new Promise(resolve => {
      setTimeout(() => {        
        dispatch({ type: 'DONE', payload: 'hello world' });
        resolve('hello world');
      }, 2000);
    });
  });

const useFetch = () => useEffect(() => { fakeCall(); }, []);
import styles from './app.module.css';

const Hello = ({ text }) => {
  useFetch();
  const [value, onChange] = useState('');
  return (
    <div className={styles.app}>
      <Bear />
      <p>{text}</p>
      <Date label="test" error="xxxxxx" value={value} onChange={onChange}/>
    </div>
  );
};

Hello.propTypes = {
  text: PropTypes.string
};

export default connect(({ test }) => ({ text: test.text }))(Hello);
