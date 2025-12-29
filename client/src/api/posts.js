const API_URL = "https://mindconnect-k332.onrender.com/api/posts";

export const createPost = async (postData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  });
  return res.json();
};

export const getPosts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};
