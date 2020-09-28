import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/posts";

class PostService {
  getPosts() {
    return axios.get(API_BASE_URL);
  }
}

export default new PostService();
