import React from 'react';
import MainComment from '../MainComment';
import ReplayComment from '../ReplayComment';
import './Comment1.css';

const Comment1 = ({ comments }) => {
  return (
    <section className='comment-1'>
      <MainComment commentorName="Neal Topham" {...comments} />
      <ReplayComment />
    </section>
  );
}

export default Comment1;
