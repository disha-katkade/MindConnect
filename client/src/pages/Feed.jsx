import { useEffect, useState } from "react";
import { createPost, getPosts } from "../api/posts";
import Sentiment from "sentiment";


function Feed() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const sentiment = new Sentiment();
  const token = localStorage.getItem("token");


  const loadPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handlePost = async () => {
    if (!token) {
  alert("Please login to post");
  return;
}
    if (!content) return;
    await createPost({ content, author: "Anonymous" });
    setContent("");
    loadPosts();
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="feed-container">
      <h2>Community Feed</h2>

      <textarea
  value={content}
  onChange={(e) => setContent(e.target.value)}
  placeholder={
    token
      ? "Share your thoughts..."
      : "Login to post and interact"
  }
  disabled={!token}
/>

<button onClick={handlePost} disabled={!token}>
  Post
</button>


      <div className="posts">
        {posts.map((post) => {
  const result = sentiment.analyze(post.content);
  const sentimentLabel = result.score > 0 ? "😊 Positive" 
                        : result.score < 0 ? "😔 Negative" 
                        : "😐 Neutral";

  const color = result.score > 0 ? "#34d399" 
              : result.score < 0 ? "#f87171" 
              : "#facc15";

  return (
    <div key={post._id} className="post-card">
      <div className="post-header">
        <img
          src={`https://i.pravatar.cc/50?u=${post._id}`}
          alt="avatar"
          className="avatar"
        />
        <div>
          <strong>User</strong>
          <div className="timestamp">
            {new Date(post.createdAt).toLocaleString()}
          </div>
        </div>
      </div>

      <p className="post-content">{post.content}</p>

      <div style={{ color, fontWeight: "bold", marginTop: "5px" }}>
        {sentimentLabel}
      </div>
    </div>
  );
})}


      </div>
    </div>
  );
}

export default Feed;
