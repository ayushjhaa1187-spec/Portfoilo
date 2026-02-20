const request = require('supertest');
const express = require('express');
const contactRoutes = require('../../routes/contact');
const Contact = require('../../models/Contact');

jest.mock('../../models/Contact'); // Mock the model module

const app = express();
app.use(express.json());
app.use('/api/contact', contactRoutes);

describe('POST /api/contact', () => {
  let mockSave;

  beforeEach(() => {
    jest.clearAllMocks();
    mockSave = jest.fn();
    // Default mock implementation for Contact constructor
    Contact.mockImplementation(() => ({
      save: mockSave
    }));
  });

  it('should return 200 and the contact object when submission is successful', async () => {
    const mockContactData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hello World',
      subject: 'Test Subject'
    };

    const mockSavedContact = {
      ...mockContactData,
      _id: 'mockId',
      date: new Date().toISOString()
    };

    mockSave.mockResolvedValue(mockSavedContact);

    const res = await request(app)
      .post('/api/contact')
      .send(mockContactData);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('msg', 'Message sent successfully');
    expect(res.body.contact).toEqual(expect.objectContaining({
      name: 'Test User',
      email: 'test@example.com'
    }));
    expect(Contact).toHaveBeenCalledWith(expect.objectContaining(mockContactData));
    expect(mockSave).toHaveBeenCalled();
  });

  it('should return 500 if database save fails', async () => {
    const mockContactData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hello World'
    };

    // Mock save to throw an error
    mockSave.mockRejectedValue(new Error('Database error'));

    // Mock console.error to avoid polluting test output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const res = await request(app)
      .post('/api/contact')
      .send(mockContactData);

    expect(res.statusCode).toEqual(500);
    expect(res.text).toEqual('Server Error');
    expect(mockSave).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
