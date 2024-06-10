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
const advantages = fetchData('https://api.be-practical.com/api/advantages');
const companies = fetchData('https://api.be-practical.com/api/companies');
const trainingModule = fetchData('https://api.be-practical.com/api/trainingmodes');
const testinomials = fetchData('https://api.be-practical.com/api/testimonials');
const youtubeVideos = fetchData('https://api.be-practical.com/api/youtubeVideos');
const CoursePage = fetchData('https://api.be-practical.com/api/courses');
const Quiz = fetchData('https://api.be-practical.com/api/Quiz');
const EventsApi = fetchData('https://api.be-practical.com/api/events');
const homeHeroApi = fetchData('https://api.be-practical.com/api/heroSection');
const BlogsApi = fetchData('https://api.be-practical.com/api/blogs');
const ourCoursesApi = fetchData('https://api.be-practical.com/api/ourCourses');
const allCourseApi = fetchData('https://api.be-practical.com/api/allcourses');

export { advantages, companies, trainingModule, testinomials, youtubeVideos, CoursePage, Quiz, EventsApi, homeHeroApi, BlogsApi, ourCoursesApi, allCourseApi };
 