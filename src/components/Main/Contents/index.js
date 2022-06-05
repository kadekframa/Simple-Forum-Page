import React from 'react';
import ForumTitle from './ForumTitle';
import './Contents.css';

class Contents extends React.Component {
    render() {
        return (
          <React.Fragment>
            <article className='forum-title_component'>
              <ForumTitle />
            </article>

            <article className='forum-comment_component'>
              <p>Contents</p>
            </article>

            <section className='adding-comment_component'>
              <p>Contents</p>
            </section>
          </React.Fragment>
        );
    }
}

export default Contents;
