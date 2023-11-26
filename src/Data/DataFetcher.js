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
const advantages = fetchData('https://backend-bp-bpdeveloperscommunity.onrender.com/api/advantages');
const companies = fetchData('https://backend-bp-bpdeveloperscommunity.onrender.com/api/companies');
const trainingModule = fetchData('https://backend-bp-bpdeveloperscommunity.onrender.com/api/trainingmodes');
const testinomials = fetchData('https://backend-bp-bpdeveloperscommunity.onrender.com/api/testimonials');
const youtubeVideos = fetchData('https://backend-bp-bpdeveloperscommunity.onrender.com/api/youtubeVideos');
const CoursePage = fetchData('https://backend-bp-bpdeveloperscommunity.onrender.com/api/courses');
const Quiz = fetchData('https://backend-bp-bpdeveloperscommunity.onrender.com/api/Quiz');
const EventsApi = fetchData('https://backend-bp-bpdeveloperscommunity.onrender.com/api/events');
const homeHeroApi = fetchData('https://backend-bp-bpdeveloperscommunity.onrender.com/api/heroSection');
const BlogsApi = fetchData('https://backend-bp-bpdeveloperscommunity.onrender.com/api/blogs');
const ourCoursesApi = fetchData('https://backend-bp-bpdeveloperscommunity.onrender.com/api/ourCourses');

export { advantages, companies, trainingModule, testinomials, youtubeVideos, CoursePage, Quiz, EventsApi, homeHeroApi, BlogsApi, ourCoursesApi };
