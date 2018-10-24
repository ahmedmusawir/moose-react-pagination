import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Post from './Post';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions/postActions';
import MoosePagination from './MoosePagination';

export class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    // console.log(this.props.posts);
    const { posts } = this.props;
    return (
      <div className="home-page pt-5">
        <h1 className="text-center mb-4">Redux Post List</h1>

        <div className="row">
          <div className="col-md-8 mx-auto">
            <MoosePagination todos={posts} currentPage={1} todosPerPage={8} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
});

const mapDispatchToProps = { getPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
