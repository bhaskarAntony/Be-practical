import axios from "axios";

const leadsquared = async (name,email,phone, course) => {


   
    const leadData = [
      {
        Attribute:'FirstName',
        Value:name.split(' ')[0]
      },
      {
        Attribute:'LastName',
        Value:name.split(' ').slice(1).join(' ') || ''
      },
      {
        Attribute:'Source',
        Value:"Website"
      },
      {
        Attribute:'EmailAddress',
        Value:email
      },
      {
        Attribute:'Phone',
        Value:phone
      },
      {
        Attribute:'mx_Course_Interested',
        Value:course
      }

     
  
      
    ]
    console.log(leadData);

   


      try {
         const response = await axios.post(`${apiURL}?postUpdatedLead=false&accessKey=${accessKey}&secretKey=${secretKey}`, leadData);
        //  console.log(response);
         return {success:true, data:response.data};

      } catch (error) {
        return {success:false, data:error.message};
      }
     
  };
  export default leadsquared