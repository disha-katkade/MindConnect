import { useEffect, useState } from "react";
import { createPost, getPosts } from "../api/posts";
import Sentiment from "sentiment";


function Feed() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const sentiment = new Sentiment();

  const loadPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handlePost = async () => {
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
        placeholder="Share how you're feeling..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handlePost}>Post</button>

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
      <p>{post.content}</p>
      <small>{new Date(post.createdAt).toLocaleString()}</small>
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
