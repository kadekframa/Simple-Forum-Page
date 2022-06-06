import React from 'react';
import ForumTitle from './ForumTitle';
import Comments from './Comments';
import AddingComments from './AddingComments';
import './Contents.css';

class Contents extends React.Component {
    render() {
        return (
          <React.Fragment>
            <article className='forum-title_component'>
              <ForumTitle />
            </article>

            <article className='forum-comment_component'>
              <Comments />
            </article>

            <section className='adding-comment_component'>
              <AddingComments />
            </section>
          </React.Fragment>
        );
    }
}

export default Contents;
