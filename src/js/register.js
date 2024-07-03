import axios from "axios";

export const Register = async (formData) => {
    
    try {
        const response = await axios.post('http://localhost:3500/course/register', formData);
        
        if (response.status === 200) {
          // Handle successful form submission
       return {status: true, data:response}
        } else {
          // Handle error
          return {status: false, data:response}
        }
      } catch (error) {
        return {status: false, data:response}
      }
    
}