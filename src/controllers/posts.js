import axios from "axios";

const getPosts = async (req, res) => {
  try {
    const posts = await axios.get(process.env.URL_API);
    if (posts.length < 0)
      return res.status(404).json({ msg: "Posts Not Found" });
    return res.json(posts.data);
  } catch (e) {
    console.log({ e });
    return res.json({ msg: "Error Server" });
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await axios.get(process.env.URL_API + "/" + id);
    if (!post) return res.status(404).json({ msg: "Post Not Found" });
    return res.status(200).json(post.data);
  } catch (e) {
    console.log({ e });
    return res.json({ msg: "Error Server" });
  }
};

export default {
  getPosts,
  getPost,
};
