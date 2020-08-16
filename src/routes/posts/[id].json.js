import axios from "axios";
import { BASE_URL_API } from "../../config";

function getPost(id) {
  return axios
    .get(BASE_URL_API + "/posts/" + id)
    .then((response) => response.data);
}

export default getPost;
