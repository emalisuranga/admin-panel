import axios from 'axios';

const apiUrl = 'https://vi9b42paw5.execute-api.ap-northeast-1.amazonaws.com/QA';

export const fetchRecruitmentProgress = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching recruitment progress:', error);
    throw error;
  }
};

export const fetchRecruitmentById = async () => {
  try {
    const response = await axios.get(`${apiUrl}/recruitmentiistsheetbyid`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recruitment by ID:', error);
    throw error;
  }
};

export const fetchRecruitmentList = async () => {
  console.log("fetchRecruitmentList")
  try {
    const response = await axios.get(`${apiUrl}/recruitmentiistsheet`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recruitment list:', error);
    throw error;
  }
};