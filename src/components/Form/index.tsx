import React, { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import { Container, FormWrap, InputWrap, FormResponse } from './styled';

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.GATSBY_EMAILJS_SERVICE_ID as string,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.GATSBY_EMAILJS_PUBLIC_KEY as string
      );

      console.log(result);
      setResponseMessage('Your interest has been successfully registered');
    } catch (error) {
      console.log(error);
      setResponseMessage(
        'We could not complete your request, please try again later'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container ref={form} onSubmit={sendEmail}>
      <FormWrap>
        <InputWrap>
          <FormInput
            type='text'
            name='full_name'
            required
            value={fullName}
            placeholder='Full name'
            isColumn={true}
            color='red'
            handleChange={(e) => setFullName(e.target.value)}
          />

          <FormInput
            type='email'
            required
            name='email'
            value={email}
            placeholder='Email address'
            isColumn={true}
            color='blue'
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormTextArea
            type='text'
            name='message'
            required
            value={message}
            placeholder='Enter your message'
            style={{ marginBottom: '20px' }}
            isColumn={true}
            handleChange={(e) => setMessage(e.target.value)}
          />
        </InputWrap>

        <input type='hidden' name='contact_type' />

        <input type='hidden' name='click_origin' />

        <button type='submit' value='send'>
          {loading ? <div className='loader' /> : <p>Submit enquiry</p>}
        </button>
      </FormWrap>
      <FormResponse>
        <p>{responseMessage === '' ? '' : responseMessage}</p>
      </FormResponse>
    </Container>
  );
};

export default Form;
