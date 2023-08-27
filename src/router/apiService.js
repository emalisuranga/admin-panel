// apiService.js
import axios from 'axios';

// const apiUrl = 'https://1j9zz2b9xb.execute-api.ap-northeast-1.amazonaws.com/QA'; // Replace with your API's base URL
const apiUrl = 'https://d55h59rq7e.execute-api.ap-northeast-1.amazonaws.com/QA-SalesRecruitmentProgressManagement';

export const fetchItemById = async () => {
  try {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Add more API functions as needed
