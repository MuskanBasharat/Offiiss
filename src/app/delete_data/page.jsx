'use client';

import { useState } from 'react';
import './delete.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import validator from 'validator';

export default function DataDeletionForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateContact = (contact) => {
    if (validator.isEmail(contact)) {
      return 'email';
    } else if (validator.isMobilePhone(contact, 'any', { strictMode: false })) {
      return 'phone';
    }
    return 'invalid';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate form inputs
    if (!name.trim() || !contact.trim()) {
      setError('Both fields are required.');
      setIsSubmitting(false);
      return;
    }

    // ✅ ADDED: Validate contact information
    const contactType = validateContact(contact.trim());
    if (contactType === 'invalid') {
      setError('Please enter a valid email address or phone number.');
      setIsSubmitting(false);
      return;
    }

    // Prepare data to send to the API
    const formData = {
      name: name.trim(),
      contact: contact.trim(),
      // ✅ OPTIONAL: You can also send the contact type to your API
      contact_type: contactType,
    };

    try {
      // Make API request
      const response = await fetch('https://api.offiiss.com/api/delete-data/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your data deletion request has been submitted successfully.');
        // Reset form
        setName('');
        setContact('');
      } else {
        alert('Failed to submit the request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ OPTIONAL: Add real-time validation for better UX
  const handleContactChange = (value) => {
    setContact(value);
    
    // Clear error when user starts typing
    if (error && value.trim()) {
      setError('');
    }
  };

  return (
    <>
      <Navbar/>
      <div className="form-container">
        <h2 className='h2-delete'>Request Data Deletion</h2>
        <form id="dataDeletionForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className='label-delete'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact" className='label-delete'>Email or Phone</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => handleContactChange(e.target.value)}
              placeholder="Enter your email or phone"
              required
            />

          </div>
          {error && <div id="error" className="error">{error}</div>}
          <div className='button-contain'>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
}