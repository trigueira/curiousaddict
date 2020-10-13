import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/about";

class ContentService {
  getContent() {
    return axios.get(API_BASE_URL);
  }
  createContent(content) {
    return axios.post(API_BASE_URL, content);
  }
}

export default new ContentService();
