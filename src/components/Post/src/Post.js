import React, { Component } from 'react';

import Button from 'components/Button';
import Comment from 'components/Comment';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsVisible: false,
    };
  }

  toggleComments = () =>
    this.setState(prevState => ({
      commentsVisible: !prevState.commentsVisible,
    }));

  render() {
    return (
      <div className="Post">
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <div className="Post_Options">
          <Button
            disabled={this.props.comments.length === 0}
            onClick={this.toggleComments}
          >
            comments: {this.props.comments.length}
          </Button>
          <span>author: {this.props.author.email}</span>
        </div>
        {this.state.commentsVisible && (
          <div className="Post_Comments_Wrapper">
            {this.props.comments.map(comment => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Post;
