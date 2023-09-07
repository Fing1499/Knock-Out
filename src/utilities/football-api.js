import sendRequest from "./send-request";
const BASE_URL = '/api/football';


export async function getFixtures() {
  return sendRequest(`${BASE_URL}/get-fixtures`)
}

export async function getLeagueFixtures(params) {
  return sendRequest(`${BASE_URL}/get-league-fixtures`, 'POST', params)
}
  
  
  
  
