import axios from "axios";

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL
const GITHUB_API_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN

const GitAx = axios.create({
   baseURL: GITHUB_URL,
   headers: { Authorization: `token ${GITHUB_API_TOKEN}`}
});

   // deliver users from search
   export const searchUsers = async (text) => {

      const params = new URLSearchParams({
         q: text, 
      }); 
      const res = await GitAx.get(`/search/users?${params}`);
      return res.data.items
   };

   //  Get user and user Repos
  export const getUserAndRepos = async (login) => {
      const [user, repos] = await Promise.all([
         GitAx.get(`/users/${login}`),
         GitAx.get(`/users/${login}/repos`)
      ]);

      return {
         user:user.data, 
         repos: repos.data 
      }
   }