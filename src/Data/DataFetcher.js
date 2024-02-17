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
const advantages = fetchData('https://api.testbepractical.com/api/advantages');
const companies = fetchData('https://api.testbepractical.com/api/companies');
const trainingModule = fetchData('https://api.testbepractical.com/api/trainingmodes');
const testinomials = fetchData('https://api.testbepractical.com/api/testimonials');
const youtubeVideos = fetchData('https://api.testbepractical.com/api/youtubeVideos');
const CoursePage = fetchData('https://api.testbepractical.com/api/courses');
const Quiz = fetchData('https://api.testbepractical.com/api/Quiz');
const EventsApi = fetchData('https://api.testbepractical.com/api/events');
const homeHeroApi = fetchData('https://api.testbepractical.com/api/heroSection');
const BlogsApi = fetchData('https://api.testbepractical.com/api/blogs');
const ourCoursesApi = fetchData('https://api.testbepractical.com/api/ourCourses');
const allCourseApi = fetchData('http://localhost:3300/api/allcourses');

export { advantages, companies, trainingModule, testinomials, youtubeVideos, CoursePage, Quiz, EventsApi, homeHeroApi, BlogsApi, ourCoursesApi, allCourseApi };
