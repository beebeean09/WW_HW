import React from 'react';
import SubmitForm from './add_subreddit';
import Modal from 'react-modal';
import ModalStyle from './ModalStyle';
import Posts from './posts';

class Subreddits extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddits: null,
      posts: null,
      showPosts: false
     };

    this.getSubreddits = this.getSubreddits.bind(this);
    this.addSubreddit = this.addSubreddit.bind(this);
    this.editSubreddit = this.editSubreddit.bind(this);
    this.deleteSubreddit = this.deleteSubreddit.bind(this);
    this.openPosts = this.openPosts.bind(this);
  }

  componentDidMount() {
    this.getSubreddits();
  }

  getSubreddits() {
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.status === 200 && req.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(req.responseText);
        const subreddits = data.data.children;
        const posts = subreddits.map(el => el.data.url);
        // console.log(posts);
        this.getSubredditsPosts(posts);
        console.log(subreddits);
        this.setState({subreddits: subreddits});
      }
    };

    req.open('GET', 'https://www.reddit.com/subreddits.json', true);
    req.send();
  }

  splitPost(post) {
    return post.split('/')[2];
  }

  getSubredditsPosts(posts) {
    const subredditsPosts = [];

    posts.forEach((post, idx) => {
      const req = new XMLHttpRequest();
      const subredditsHash = {};

      // debugger;
      req.onreadystatechange = () => {
        if (req.status === 200 && req.readyState === XMLHttpRequest.DONE) {
          const dataPosts = JSON.parse(req.responseText);

          const postTitle = this.splitPost(post);
          subredditsHash[postTitle] = dataPosts.data.children;
          subredditsPosts.push(subredditsHash);
          // console.log(subredditsPostsHash);
        }
      };

      req.open('GET', `https://www.reddit.com/${post}/.json`, true);
      req.send();
    });
    // debugger;
    console.log(subredditsPosts);
    this.setState({posts: subredditsPosts});
  }

  addSubreddit(subReddit) {
    debugger;
    const oldSubreddits = this.state.subreddits;
    const newSubreddits = oldSubreddits.push(subReddit);
    this.setState({
      subReddits: newSubreddits
    });
  }

  editSubreddit(key, newSubreddit) {
    const currentSubreddits = this.state.subreddits;
    const oldSubredditIdx = currentSubreddits[key];

    currentSubreddits[key].data.title = newSubreddit.data.title;
    currentSubreddits[key].data.public_description = newSubreddit.data.public_description;

    this.setState({ subReddits: currentSubreddits });
    // console.log(currentSubreddits.indexOf(subReddit));
  }

  deleteSubreddit(idx) {
    const allSubreddits = this.state.subreddits;
    allSubreddits.splice(idx, 1);
    this.setState({ subReddits: allSubreddits });
  }

  openPosts(e) {
    debugger;
    e.preventDefault();
    this.setState({showPosts: true});
  }

  render() {
    const subreddits = this.state.subreddits;
    const posts = this.state.posts;
    const subredditsKeys = [];
    const statusPosts = this.state.showPosts === false ? 'display: none' : 'display: flex';

    debugger;
    // <div></div>


    const listSubReds = (subreddits) ?
      subreddits.map((subRed, idx) =>
        <div key={idx}>
          <div className="hide">{subredditsKeys.push(subRed)}</div>
          <div className="subredditContainer">
            <div className="header">
              <div className="headerLeft">
                <a onClick={this.openPosts}><h1>{subRed.data.title}</h1></a>
                <ul>{subRed.data.public_description}</ul>
              </div>
              <div className="headerRight">
                <SubmitForm
                  idx={idx}
                  title={subRed.data.title}
                  publicDescription={subRed.data.public_description}
                  editSubreddit={this.editSubreddit}
                  ModalType="Edit"/>
                <button onClick={() => this.deleteSubreddit(idx)}>Delete</button>
              </div>
            </div>
          </div>
          <Posts
            posts={posts}
            subredditsKeys={subredditsKeys}
            statusPosts={statusPosts}/>
        </div>
      ) : <div></div>;

      // <Posts
      //   subredditsKeys={subredditsKeys}
      //   statusPosts={statusPosts}
      //   posts={posts}/>

    return(
      <div className="mainContainer">
        <div>
          <SubmitForm
            addSubreddit={this.addSubreddit}
            ModalType="Add"
            publicDescription=""
            title="" />
        </div>
        <div>{listSubReds}</div>
      </div>
    );
  }
}

export default Subreddits;
