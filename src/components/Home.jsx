import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Home extends Component {
  

  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div
            className="post card card-panel teal"
            key={post.id}
            style={{
              marginBottom: 30,
              border: 0,
              boxShadow: "none"
            }}
          >
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title" style={{ color: "#fff"  }}>
                  {post.title}
                </span>
              </Link>
              <p style={{ color: "#fff"}}>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Post Yet</div>
    );
    return (
      <div className="container">
        <h4 className="center"
         >Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
