import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/posts";

class PostService {
  getPosts() {
    return axios.get(API_BASE_URL);
  }
  createPost(post) {
    return axios.post(API_BASE_URL, post);
  }
}

export default new PostService();
