import React, { Component } from 'react';

import TitlePanel from 'components/TitlePanel';
import Button from 'components/Button';

import './CreatePost.css';

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
        <div class="CreatePost_Actions">
          <Button>Create</Button>
        </div>
      </div>
    );
  }
}

export default CreatePost;
