// SurveyFormPage.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface SurveyFormProps {}

interface FormData {
  name: string;
  email: string;
  feedback: string;
}

const SurveyFormPage: React.FC<SurveyFormProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    feedback: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await axios.post('/api/contact', JSON.stringify({
        ...formData,
        appName: 'apptester'
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        feedback: '',
      });
    } catch (err) {
      setError('There was an error submitting your feedback.');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.feedback;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg shadow-md p-6"
        aria-labelledby="survey-form"
      >
        <h2 id="survey-form" className="text-2xl font-bold mb-4 text-center">Survey Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
            Feedback
          </label>
          <textarea
            name="feedback"
            id="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            aria-required="true"
            rows={4}
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
          {error && <span className="text-red-500 text-sm">{error}</span>}
          {success && <span className="text-green-500 text-sm">Feedback submitted successfully!</span>}
        </div>
      </form>
    </div>
  );
};

export default SurveyFormPage;
