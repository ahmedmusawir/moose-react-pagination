import React, { Component } from 'react';
import InputGroup from '../components/InputGroup';
import InputTextarea from '../components/InputTextarea';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../store/actions/postActions';

export class AddPost extends Component {
  static propTypes = {
    addPost: PropTypes.func.isRequired
  };
  state = {
    id: '',
    title: '',
    body: '',
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;

    //Check For Errors
    if (title === '') {
      this.setState({
        errors: {
          title: 'Title Is Required'
        }
      });
      return;
    }

    if (body === '') {
      this.setState({
        errors: {
          body: 'Content Is Required'
        }
      });
      return;
    }

    const newPost = {
      id: uuid(),
      title,
      body
    };

    //Adding Data to Redux
    this.props.addPost(newPost);

    //Clear State
    this.setState({
      title: '',
      body: '',
      errors: {}
    });

    //Redirect to Posts/Blog page
    this.props.history.push('/posts');
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { id, title, body, errors } = this.state;

    return (
      <div className="add-post-from-container animated slideInLeft pt-5">
        <div className="card mb-3">
          <div className="card-header text-danger">
            <strong>Add Post</strong>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="">
                <InputGroup
                  name="title"
                  type="text"
                  placeholder="Enter Post Title"
                  value={title}
                  onChange={this.onChange}
                  error={errors.title}
                />

                <div className="row">
                  <div className="col-md-12">
                    <InputTextarea
                      name="body"
                      value={body}
                      onChange={this.onChange}
                      error={errors.body}
                      placeholder="Enter Content"
                    />
                  </div>
                </div>
                <div className="mx-auto">
                  <input
                    type="submit"
                    className="form-control form-control-lg btn btn-light mt-2"
                    value="Add Post"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { addPost };

export default connect(
  null,
  mapDispatchToProps
)(AddPost);
