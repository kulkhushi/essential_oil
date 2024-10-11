import { downloadBrochureActions } from '@/actions/actions';
import React, { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { SubmitButton } from './Button';
import FormContainer from './FormContainer';

const initialState = {
    message: '',
  };

const DownloadForm = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   mobile: '',
  // });

  // const handleChange = (e: { target: { name: string; value: string; }; }) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     await DownloadBrochureActions(formData)
//     console.log('Form submitted:', formData);
//   };

  //  const [state, formAction] = useFormState(downloadBrochureActions,initialState);
  //  const { pending } = useFormStatus();

  //  console.log('pending:', pending);
  //  console.log('state:', state);

  return (
<FormContainer action={downloadBrochureActions}>
   
      <label htmlFor="name">Name:</label><br />
      <input
        type="text"
        id="name"
        name="name"
        // value={formData.name}
        // onChange={handleChange}
        required
        // disabled={pending}
      /><br /><br />

      <label htmlFor="email">Email:</label><br />
      <input
        type="email"
        id="email"
        name="email"
        // value={formData.email}
        // onChange={handleChange}
        required
        // disabled={pending}
      /><br /><br />

      <label htmlFor="mobile">Mobile Number:</label><br />
      <input
        type="tel"
        id="mobile"
        name="mobile"
        // value={formData.mobile}
        // onChange={handleChange}
        required
        pattern="[0-9]{10}"
        // disabled={pending}
      /><br /><br />

     <SubmitButton />
     </FormContainer>
  );
};

export default DownloadForm;
