import React, { Component } from 'react';
import { request } from 'graphql-request';

import TitlePanel from 'components/TitlePanel';
import Button from 'components/Button';

import './CreatePost.css';

const createPostQuery = values =>
  `mutation {
      createPost(
        title: "${values.title}",
        body: "${values.body}",
        author: "${values.author}"
      ) {
        id,
        title,
        author {
          id,
          firstName
        }
      }
  }`;

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '5bc37e4bf6d069755ea15c5d', // hardcoded author.id
    };
  }

  handleOnChange = ({ target: { value, name } }) => {
    return this.setState(() => ({ [name]: value }));
  };

  handleSubmit = () => {
    return request('http://localhost:3001/graphql', createPostQuery(this.state))
      .then(() => this.props.history.push('/'))
      .catch(err => console.log('ERROR', err));
  };
  render() {
    const { title, body } = this.state;
    return (
      <div className="CreatePost">
        <TitlePanel header="Create Post" subHeader="Write about anything" />
        <div className="CreatePost_Form">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="enter title..."
            onChange={this.handleOnChange}
          />

          <textarea
            name="body"
            value={body}
            placeholder="enter post..."
            onChange={this.handleOnChange}
            rows="10"
          />
        </div>
        <div className="CreatePost_Actions">
          <Button onClick={this.handleSubmit}>Create</Button>
        </div>
      </div>
    );
  }
}

export default CreatePost;
