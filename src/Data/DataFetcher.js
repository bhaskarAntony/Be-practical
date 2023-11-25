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
const advantages = fetchData('http://localhost:3300/api/advantages');
const companies = fetchData('http://localhost:3300/api/companies');
const trainingModule = fetchData('http://localhost:3300/api/trainingmodes');
const testinomials = fetchData('http://localhost:3300/api/testimonials');
const youtubeVideos = fetchData('http://localhost:3300/api/youtubeVideos');
const CoursePage = fetchData('http://localhost:3300/api/courses');
const Quiz = fetchData('http://localhost:3300/api/Quiz');
const EventsApi = fetchData('http://localhost:3300/api/events');
const homeHeroApi = fetchData('http://localhost:3300/api/heroSection');
const BlogsApi = fetchData('http://localhost:3300/api/blogs');

export { advantages, companies, trainingModule, testinomials, youtubeVideos, CoursePage, Quiz, EventsApi, homeHeroApi, BlogsApi };
