export function onLocationUpdated (e) {
  const {position: pos} = e
  const {coords: c} = pos
  console.log(c)
  console.log('CALL API HERE')
}

export function uploadToServer (data) {
  // upload to server NOW and return a Promise
}

export function getVizFromServer (data) {
  // retrieve data from server
}
