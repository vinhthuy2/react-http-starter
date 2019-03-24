import React, { Component } from 'react';
import axios from '../../../axios.js';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
	state = {
		posts: [],
		selectedPostId: '',
		error: false
	};
	postSelectedHandler = (id) => {
		this.setState({ selectedPostId: id });
	};
	componentDidMount = () => {
		axios
			.get('/posts/')
			.then((res) => {
				const posts = res.data.slice(0, 4);
				const updatePosts = posts.map((post) => {
					return { ...post, author: 'Max' };
				});
				this.setState({ posts: updatePosts });
			})
			.catch((err) => {
				console.log(err);
				//this.setState({ error: true });
			});
	};
	render() {
		let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
		if (!this.state.error) {
			posts = this.state.posts.map((post) => {
				return (
					<Post
						key={post.id}
						author={post.author}
						title={post.title}
						clicked={() => this.postSelectedHandler(post.id)}
					/>
				);
			});
		}
		return <section className="Posts">{posts}</section>;
	}
}
export default Posts;
