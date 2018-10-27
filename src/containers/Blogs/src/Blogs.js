import React, { Component } from 'react';
import { request } from 'graphql-request';

import Post from 'components/Post';
import TitlePanel from 'components/TitlePanel';

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

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      hasError: false,
      posts: [],
    };
  }

  componentDidMount() {
    request('http://localhost:3001/graphql', fetchPostsQuery)
      .then(data => this.setState({ posts: data.posts }))
      .catch(error => this.setState({ error, hasError: true }));
  }

  render() {
    const { loading, error, hasError, posts } = this.state;

    return (
      <div className="Blogs">
        <TitlePanel header="Posts" subHeader="A collection of all Posts" />
        {hasError && <span>{error}</span>}
        {loading && <span>loading...</span>}
        {posts && posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    );
  }
}

export default Blogs;
