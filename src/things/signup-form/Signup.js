import React from 'react';

export default function Signup() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    isJoinNewsletter: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (password === passwordConfirmation) {
      console.log('Successfully signed up');
      if (isJoinNewsletter) {
        console.log('Thank your for joining the newsletter');
      }
    } else {
      console.log('Password do not match up');
    }
  }

  const { email, password, passwordConfirmation, isJoinNewsletter } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" className="form--input" name="email" onChange={handleChange} value={email} />
      <input type="password" placeholder="Password" className="form--input" name="password" onChange={handleChange} value={password} />
      <input type="password" placeholder="Password Confirmation" className="form--input" name="passwordConfirmation" onChange={handleChange} value={passwordConfirmation} />

      <div>
        <input type="checkbox" id="is-join-newsletter" className="form--input" name="isJoinNewsletter" onChange={handleChange} checked={isJoinNewsletter} />
        <label htmlFor="is-join-newsletter" className="form--input">
          I want to join the newsletter
        </label>
      </div>

      <button className="form--input">Sign Up</button>
    </form>
  );
}
