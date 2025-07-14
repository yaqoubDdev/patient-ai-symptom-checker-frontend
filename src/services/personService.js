import axios from "axios"
const URL = 'http://localhost:2005/allData'

const getAll = () => {
  const response = axios.get(URL)
  return response.then(res => res.data)
}

const create = (object) => {
  const response = axios.post(URL, object)
  return response.then(res => res.data)
}

export default { getAll, create}