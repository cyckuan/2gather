import axios from 'axios'

export function uploadToServer (data) {
  // upload to server NOW and return a Promise
  return axios.post(UPLOAD_URL, data)
}

export function getVizFromServer (params) {
  // retrieve data from server
  return axios.get(VIZ_URL, data)
}
