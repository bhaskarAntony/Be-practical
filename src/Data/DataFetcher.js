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
const advantages = fetchData('https://comfortable-boot-fly.cyclic.app//api/advantages');
const companies = fetchData('https://comfortable-boot-fly.cyclic.app//api/companies');
const trainingModule = fetchData('https://comfortable-boot-fly.cyclic.app//api/trainingmodes');
const testinomials = fetchData('https://comfortable-boot-fly.cyclic.app/api/testimonials');
const youtubeVideos = fetchData('https://comfortable-boot-fly.cyclic.app/api/youtubeVideos');
const CoursePage = fetchData('https://comfortable-boot-fly.cyclic.app/api/courses');
const Quiz = fetchData('https://comfortable-boot-fly.cyclic.app/api/Quiz');
const EventsApi = fetchData('https://comfortable-boot-fly.cyclic.app/api/events');
const homeHeroApi = fetchData('https://comfortable-boot-fly.cyclic.app/api/heroSection');
const BlogsApi = fetchData('https://comfortable-boot-fly.cyclic.app/api/blogs');
const ourCoursesApi = fetchData('https://comfortable-boot-fly.cyclic.app/api/ourCourses');
const allCourseApi = fetchData('https://comfortable-boot-fly.cyclic.app/api/allcourses');

export { advantages, companies, trainingModule, testinomials, youtubeVideos, CoursePage, Quiz, EventsApi, homeHeroApi, BlogsApi, ourCoursesApi, allCourseApi };
 