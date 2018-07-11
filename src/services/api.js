import axios from "axios";

const apiUsers = "https://jsonplaceholder.typicode.com/users";
const delUsers = "https://jsonplaceholder.typicode.com";

// Get
export default {
  async getUsers() {
    const response = await axios.get(apiUsers);
    return response.data;
  },
  // getUsers() {
  //   return axios.get(apiUsers).then(resp => resp.data);
  // },

  async getPosts(user) {
    let profile = await axios.get(`${apiUsers}/${user}`);
    profile = profile.data;
    let response = await axios.get(`${apiUsers}/${user}/posts`);
    response = response.data;
    return { profile, response };
  },

  async newPost(data) {
    const { userId, post } = data;
    const newPost = await axios.post(`${apiUsers}/${userId}/posts`, post);
    return newPost.data;
  },

  async deletePost(data) {
    const { userId, post } = data;
    const deletedPost = await axios.delete(`${delUsers}/posts/${post}`);
    return deletedPost.data;
  }
};

function getUserAccount(user) {
  return axios.get(`${apiUsers}/${user}`);
}

function getUserPermissions(user) {
  return axios.get(`${apiUsers}/${user}/posts`);
}
