import React from "react";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ posts: json });
      });
  }
  render() {
    return (
      <>
        <div className="posts">
          {this.state.posts.map((post, index) => {
            return (
              <div className="post">
                <h2>
                  {post.id}-{post.title}
                </h2>
                <p>{post.body}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
function UserReports() {
  return (
    <div className="reports">
      <h1>User Reports</h1>
      <Users />
    </div>
  );
}
function RevenueReports() {
  return (
    <div className="reports">
      <h1>Revenue Reports</h1>
    </div>
  );
}

export { UserReports, RevenueReports };
