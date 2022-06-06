import React from 'react';
import './ReplayComment.css';

const ReplayComment = () => {
    return (
        <div className='wrapper-replay-comment'>
            <img src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
            <div className='desc-comment'>
                <h3 className='commentor-name'>Shella Tamashiro</h3>
                <p className='time-comment'>8 February 2017 07.30</p>
                <p className='comment'>Mungkin ada fenomena paranormal activity</p>
            </div>
        </div>)
}

export default ReplayComment;
