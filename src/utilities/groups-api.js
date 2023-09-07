import sendRequest from "./send-request";
const BASE_URL = '/api/groups';


export async function createGroup(groupParams) {
  return sendRequest(`${BASE_URL}/create-group`, 'POST', groupParams)
}

export async function getGroups() {
  return sendRequest(`${BASE_URL}/get-groups`)
}

export async function joinGroup(searchKey) {
  return sendRequest(`${BASE_URL}/join-group`, 'POST', searchKey)
}