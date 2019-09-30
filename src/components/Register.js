/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const StyledBox = styled.div`
  border: 1px solid #09d3ac;
  border-radius: 5px;
  width: fit-content;
  margin: 2rem auto;
  padding: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 2.5rem;
  color: #09d3ac;
`;

const StyledInput = styled.input`
  margin: 0 0 1rem 0;
  padding: 3px 0;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: transparent;
  border-color: #09d3ac;
  border-radius: 5px;
  color: #09d3ac;
`;

const Register = () => {
  const [form, setForm] = React.useState({
    username: '',
    password: '',
    confirm: '',
  });
  const history = useHistory();
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert('no');
    } else {
      const post = await axios.post(
        'http://localhost:3001/api/v1/register',
        form,
      );
      setForm({
        username: '',
        password: '',
        confirm: '',
      });
      if (post.status === 201) {
        history.push('/', {
          message: 'Your account has been created now you can login',
        });
      } else {
        alert('error');
      }
    }
  };
  return (
    <StyledBox>
      <StyledForm onSubmit={handleSubmit}>
        <h1 style={{ marginTop: 0 }}>Register</h1>
        <label htmlFor="username">Username</label>
        <StyledInput
          type="text"
          id="username"
          name="username"
          onChange={handleInput}
          value={form.username}
        />
        <label htmlFor="password">Password</label>
        <StyledInput
          type="password"
          id="password"
          name="password"
          onChange={handleInput}
          value={form.password}
        />
        <label htmlFor="confirm">Confirm Password</label>
        <StyledInput
          type="password"
          id="confirm"
          name="confirm"
          onChange={handleInput}
          value={form.confirm}
        />
        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </StyledBox>
  );
};

export default Register;