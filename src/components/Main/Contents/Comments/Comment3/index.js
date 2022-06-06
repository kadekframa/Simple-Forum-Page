import React from 'react';
import MainComment from '../MainComment';
import './Comment3.css';

class Comment3 extends React.Component {
    render() {
        return (
          <div className='comment-3'>
            <MainComment commentorName="Lawanda Schey" />
          </div>
        );
    }
}

export default Comment3;
