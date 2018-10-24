import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        <div className="row mb-5">
          <Link
            className="btn btn-secondary btn-block float-right"
            to={`/posts/add`}
          >
            <i
              className="fa fa-pencil pr-3 pt-1"
              aria-hidden="true"
              style={{ cursor: 'pointer' }}
            />
            Add A Post
          </Link>
        </div>
        <div className="row">
          <div className="">
            <MoosePagination todos={posts} currentPage={1} todosPerPage={10} />
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
