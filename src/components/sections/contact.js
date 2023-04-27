import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { 
  contactSection,
  contactCard,
  contactForm,
} from '../css-modules/sections.module.scss'

function ContactForm() {
  const [state, handleSubmit] = useForm("xdovyvan");
  if (state.succeeded) {
    return (
    <section id="contact" className={contactSection}>
      <div className={contactCard}>
        <h2>Contact</h2>
        <p>If you want to ask me a question, give me a suggestion, or even talk to a friend, feel free to use this form.</p>
        <div className={contactForm}>
          <p>Thanks for contacting me. I promise I'll get back to you as soon as I can!</p>
        </div>
      </div>
    </section>
    );
  }
  return (
    <section id="contact" className={contactSection}>
      <div className={contactCard}>
        <h2>Contact</h2>
        <p>If you want to ask me a question, give me a suggestion, or even talk to a friend, feel free to use this form.</p>

        <form onSubmit={handleSubmit} className={contactForm}>
          <label htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            type="text" 
            name="name"
            placeholder="Name"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          <label htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="E-mail"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <label htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;