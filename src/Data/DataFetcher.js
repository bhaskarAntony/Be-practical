import axios from 'axios';

async function fetchData(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error so that the caller can handle it if needed
  }
}

const advantages = fetchData('https://fancy-mittens-ray.cyclic.app/api/advantages');
const companies = fetchData('https://fancy-mittens-ray.cyclic.app/api/companies');
const trainingModule = fetchData('https://fancy-mittens-ray.cyclic.app/api/trainingmodes');
const testinomials = fetchData('https://fancy-mittens-ray.cyclic.app/api/testimonials');
const youtubeVideos = fetchData('https://fancy-mittens-ray.cyclic.app/api/youtubeVideos');
const CoursePage = fetchData('https://fancy-mittens-ray.cyclic.app/api/courses');
const Quiz = fetchData('http://localhost:3300/api/Quiz');

export { advantages, companies, trainingModule, testinomials, youtubeVideos, CoursePage, Quiz };
