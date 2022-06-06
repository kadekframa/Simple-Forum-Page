import React from 'react';
import MainComment from '../MainComment';
import ReplayComment from '../ReplayComment';
import './Comment2.css';

class Comment2 extends React.Component {
    render() {
        return (
          <div className='comment-2'>
            <MainComment commentorName="Jacquelyne Garrity" />
            <ReplayComment />
            <ReplayComment />
          </div>
        );
    }
}

export default Comment2;
