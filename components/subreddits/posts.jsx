import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const posts = this.props.posts;
    const subredditsKeys = this.props.subredditsKeys;
    const statusPosts = this.props.statusPosts;
    // console.log(posts);
    console.log(subredditsKeys);
    const listPosts = (posts) ?
    subredditsKeys.forEach(el =>
      posts.map((post, idx) =>
      <div className="postContainer" style={{statusPosts}} key={idx}>
        <div className="post" >
          {post.el}
        </div>
      </div>
    )
  ) : <div></div>;


    return (
      <div>
        {listPosts}
      </div>
    );
  }
}

export default Posts;
