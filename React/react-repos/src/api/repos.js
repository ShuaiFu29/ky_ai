
import axios from 'axios'   // http 请求库
// http 请求的时候 所有接口地址的公共部分
const BASE_URL = 'https://api.github.com/'  // 基础地址

export const getRepos = async (username) => {
  // 标准http 请求库
  // axios  method  url
  // api 模块  应用之外  搞外交
  return await axios.get(`${BASE_URL}users/${username}/repos`)
}

export const getRepoDetail = async (username, repoName) => {
  return await axios.get(`${BASE_URL}repos/${username}/${repoName}`)
}



