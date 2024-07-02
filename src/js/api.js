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

    const apiURL = 'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.CreateOrUpdate';
    const accessKey = 'u$re8714e750936465494dff9e2ea253edf';
    const secretKey = '24762cf21d6765a514730fa187bc5ffa11afeeca';

//    const responce = await axios.post(${apiURL}?postUpdatedLead=false&accessKey=${accessKey}&secretKey=${secretKey}, leadData)
//       .then((response) => {
//         console.log('Registration success:', response.data);
       
       
//       })
//       .catch((error) => {
//         console.error('Registration error:', error);
       
//       })
      try {
         const response = await axios.post(`${apiURL}?postUpdatedLead=false&accessKey=${accessKey}&secretKey=${secretKey}`, leadData);
         return {success:true, data:response.data};

      } catch (error) {
        return {success:false, data:error.message};
      }
     
  };
  export default leadsquared