import React, { Component } from 'react';
import { request } from 'graphql-request';
import PropTypes from 'prop-types';

import './App.css';

const { string, shape, arrayOf } = PropTypes;

const Post = ({
  title, body, author, comments,
}) => (
  <div className="Post">
    <div className="Post_Content">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
    <div className="Post_Options">
      <p>{`comments: ${comments.length}`}</p>
      <p>{`author: ${author.email}`}</p>
    </div>
  </div>
);

const AuthorPropsShape = shape({
  email: string,
  id: string,
});

const CommentPropsShape = shape({
  body: string,
  id: string,
});

Post.propTypes = {
  title: string,
  body: string,
  author: AuthorPropsShape,
  comments: arrayOf(CommentPropsShape),
};

Post.defaultProps = {
  title: 'missing title',
  body: 'missing body',
  author: {
    email: 'missing email',
    id: 'missing id',
  },
  comments: [{ body: 'test', id: 'test' }],
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: '',
    };
  }

  componentDidMount() {
    const fetchPostsQuery = `{
      posts {
        title,
        body,
        id,
        author {
          email,
          id          
        },
        comments {
          id,
          body,
        }
      }
    }`;

    request('http://localhost:3001/graphql', fetchPostsQuery)
      .then(data => this.setState({ posts: data.posts }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { posts, error } = this.state;

    return (
      <div className="App">
        {error && <p>{error}</p>}
        {posts.length > 0 ? posts.map(post => <Post key={post.id} {...post} />) : <p>No posts</p>}
      </div>
    );
  }
}

export default App;
