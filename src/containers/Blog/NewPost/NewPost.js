import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './NewPost.css';
import Axios from '../../../axios';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max',
    submitted: false
  };

  componentDidMount() {
    console.log(this.props);
  }
  postDateHandler = () => {
    const post = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    Axios.post('/posts', post).then(res => {
      console.log(res);
      // this.setState({ submitted: true });
      this.props.history.replace('/posts');
    });
  };

  render() {
    return (
      <div className="NewPost">
        {/* {this.state.submitted ? <Redirect to="/posts" /> : null} */}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDateHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
