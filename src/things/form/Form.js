import React from 'react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    middleName: '',
    lastName: '',
    comment: '',
    isFriendly: true,
    employment: '',
    favColor: '',
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  const { firstName, middleName, lastName, comment, isFriendly, employment, favColor } = formData;

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={firstName} />
      <input type="text" name="middleName" placeholder="Middle Name" onChange={handleChange} value={middleName} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={lastName} />
      <textarea placeholder="Comments" name="comment" onChange={handleChange} value={comment}></textarea>
      <div>
        <input type="checkbox" id="isFriendly" checked={isFriendly} onChange={handleChange} name="isFriendly" />
        <label htmlFor="isFriendly">Are your friendly?</label>
      </div>
      <fieldset>
        <legend>Employment</legend>

        <input type="radio" id="unemployed" name="employment" onChange={handleChange} value="unemployed" checked={employment === 'unemployed'} />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input type="radio" id="part-time" name="employment" onChange={handleChange} value="part-time" checked={employment === 'part-time'} />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input type="radio" id="full-time" name="employment" onChange={handleChange} value="full-time" checked={employment === 'full-time'} />
        <label htmlFor="full-time">Full-time</label>
      </fieldset>
      <div>
        <label htmlFor="favColor">Choose R / G / B color</label>
        <select id="favColor" value={favColor} onChange={handleChange} name="favColor">
          <option>-- Choose --</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}
