import React, { Component } from "react";
import { connect } from "react-redux";
import { Stylesheet } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <p className="text-center">
          <Link to="/">Back to Blog Listing</Link>
        </p>
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button
            className="btn teel"
            style={{
              width: 200,
              boxShadow: "2px 2px #888888"
            }}
            onClick={this.handleClick}
          >
            Delete Post
          </button>
        </div>

        <br />
      </div>
    ) : (
      <div className="center">Loading Post....</div>
    );
    return (
      <div className="container">
        <h4>{post}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch({ type: "DELETE_POST", id: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
