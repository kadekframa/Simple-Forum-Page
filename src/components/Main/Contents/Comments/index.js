import React from 'react';
import Comment1 from './Comment1';
import Comment2 from './Comment2';
import Comment3 from './Comment3';
import './Comments.css';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      comments: [],
    }

  }

  getFetchUsers() {
    this.setState({
      loading: true
    }, () => {
      fetch("http://localhost:3001/comments?id=fa1ca3c1-cc1e-4ed9-86b8-f60d8312d499")
        .then(respon => respon.json())
        .then(result => this.setState({
          comments: result
        }))
        .catch(console.info);
    })
  }

  componentDidMount() {
    this.getFetchUsers();
  }

  render() {
    return (
      <div className='comment-section-wrapper'>
        <h3 className='komentar-heading'>Komentar</h3>
        <Comment1 comments={this.state.comments} />
        <Comment2 />
        <Comment3 />
      </div>
      
    );
  }
}


export default Comments;
