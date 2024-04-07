'use client'

import React, { useState } from 'react';
import './index.css';

const Contact = () => {
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleLinkedInUrlChange = event => {
    setLinkedInUrl(event.target.value);
  };

  const handleMobileNumberChange = event => {
    setMobileNumber(event.target.value);
  };

  const toggleEditMode = () => {
    setEditMode(prevEditMode => !prevEditMode);
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="contact-heading">Contact</h1>
        {editMode ? (
          <div className="contact-form">
            <label>
              LinkedIn URL:
              <input
                type="text"
                value={linkedInUrl}
                onChange={handleLinkedInUrlChange}
              />
            </label>
            <label>
              Mobile Number:
              <input
                type="text"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
              />
            </label>
          </div>
        ) : (
          <div className="contact-info">
            <p>
              LinkedIn URL: {linkedInUrl || 'N/A'}
              <br />
              Mobile Number: {mobileNumber || 'N/A'}
            </p>
          </div>
        )}
        <button type="button" onClick={toggleEditMode}>
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>
    </>
  );
};

export default Contact;
