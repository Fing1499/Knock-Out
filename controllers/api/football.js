module.exports = {
  getFixtures
}

async function getFixtures(req, res) {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", process.env.API_KEY);
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");
  
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    // Define the endpoint for Arsenal's fixtures for the current season
    const endpoint = "fixtures?league=39&team=42&season=2023"; // may need to adjust the season 
  
    try {
      // Return the fetch promise, which resolves with the data
      const response = await fetch(`https://v3.football.api-sports.io/${endpoint}`, requestOptions);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Assuming the API response is in JSON format
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error in getFixtures:', error);
      throw error; // Rethrow the error to propagate it to the caller
    }
  }