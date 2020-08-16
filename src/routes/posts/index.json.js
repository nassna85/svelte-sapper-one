import axios from "axios";
import { BASE_URL_API } from "../../config";

const posts = axios
  .get(BASE_URL_API + "/posts")
  .then((response) => response.data);

export default posts;
