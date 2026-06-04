# Nutrimate Task

## Overview

This project is a simple mobile app and web integration task.

The mobile application sends a request to a deployed Node.js server. The server responds with "Hi Hello" and stores the interaction in MongoDB Atlas.

## Tech Stack

### Mobile App

* React Native
* Expo

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Deployment

* Render

## Features

* Mobile app contains a button.
* Button sends a POST request to the server.
* Server responds with "Hi Hello".
* Server stores interaction details in MongoDB.
* APK generated for Android devices.

## Project Structure

Nutrimate-Submission/

* APK/
* Nutrimate-Backend/
* Nutrimate-Frontend/
* README.md

## Deployment Link

https://nutrimate-task.onrender.com/

## API Endpoint

POST https://nutrimate-task.onrender.com/hello

Sample Response:

{
"message": "Hi Hello"
}

## MongoDB Collection Structure

Collection: interactions

Document Structure:

{
"_id": ObjectId,
"user_action": "Button Clicked",
"response": "Hi Hello",
"timestamp": Date
}

## SQL Equivalent Schema

CREATE TABLE interactions (
id SERIAL PRIMARY KEY,
user_action TEXT,
response TEXT,
timestamp TIMESTAMP
);

## Running Backend Locally

1. Install dependencies

npm install

2. Create .env file

MONGODB_URI=<your_mongodb_connection_string>

3. Start server

node server.js

## Running Mobile App

1. Install dependencies

npm install

2. Start Expo

npx expo start

3. Run using Expo Go or build APK.

## Deliverables

* Mobile App Source Code
* Generated APK
* Backend Source Code
* Deployment Link
* Database Schema
* README
