import axios from 'axios';

async function fetchData(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
const advantages = fetchData('https://fancy-mittens-ray.cyclic.app/api/advantages');
const companies = fetchData('https://fancy-mittens-ray.cyclic.app/api/companies');
const trainingModule = fetchData('https://fancy-mittens-ray.cyclic.app/api/trainingmodes');
const testinomials = fetchData('https://fancy-mittens-ray.cyclic.app/api/testimonials');
const youtubeVideos = fetchData('https://fancy-mittens-ray.cyclic.app/api/youtubeVideos');
const CoursePage = fetchData('https://fancy-mittens-ray.cyclic.app/api/courses');
const Quiz = fetchData('https://fancy-mittens-ray.cyclic.app/api/Quiz');
const EventsApi = fetchData('https://fancy-mittens-ray.cyclic.app/api/events');
const homeHeroApi = fetchData('https://fancy-mittens-ray.cyclic.app/api/heroSection');
const BlogsApi = fetchData('https://fancy-mittens-ray.cyclic.app/api/blogs');

export { advantages, companies, trainingModule, testinomials, youtubeVideos, CoursePage, Quiz, EventsApi, homeHeroApi, BlogsApi };
