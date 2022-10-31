import React from 'react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    middleName: '',
    lastName: '',
    comment: '',
  });

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  const { firstName, middleName, lastName, comment } = formData;

  return (
    <form className="flex">
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={firstName} />
      <input type="text" name="middleName" placeholder="Middle Name" onChange={handleChange} value={middleName} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={lastName} />
      <textarea placeholder="comments" name="comment" onChange={handleChange} value={comment}></textarea>
    </form>
  );
}
