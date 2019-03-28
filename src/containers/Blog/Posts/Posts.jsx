import React, { Component } from 'react';
import axios from '../../../axios.js';
import { Route } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
	state = {
		posts: [],
		selectedPostId: '',
		error: false
	};
	postSelectedHandler = (id) => {
		// this.setState({ selectedPostId: id });
		this.props.history.push(this.props.match.url + '/' + id);
	};
	componentDidMount = () => {
		console.log(this.props.match.url);

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
					//   <Link to={"/" + post.id} >
					<Post
						author={post.author}
						title={post.title}
						key={post.id}
						clicked={() => this.postSelectedHandler(post.id)}
					/>
					//   </Link>
				);
			});
		}
		return (
			<div>
				<section className="Posts">{posts}</section>
				<Route path={this.props.match.url + '/:id'} exact component={FullPost} />
			</div>
		);
	}
}
export default Posts;
