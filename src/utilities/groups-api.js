import sendRequest from "./send-request";
const BASE_URL = '/api/groups';


export async function createGroup(groupParams) {
  return sendRequest(`${BASE_URL}/create-group`, 'POST', groupParams)
}