# Nutrimate Task

## Overview

This project is a simple mobile app and web integration task developed using React Native CLI, Node.js, Express.js, and MongoDB Atlas.

The mobile application contains a button that sends a request to a deployed Node.js server. The server responds with **"Hi Hello"** and stores the interaction details in a MongoDB database.

---

## Tech Stack

### Mobile Application

* React Native CLI
* Android Native Build (Gradle)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Deployment

* Render

---

## Features

* Mobile app contains a button to communicate with the server.
* Button sends a POST request to the backend API.
* Server responds with `"Hi Hello"`.
* Every interaction is stored in MongoDB Atlas.
* Backend deployed on Render.
* Android APK generated using React Native CLI and Gradle.

---

## Project Structure

```text
nutrimate-task/
│
├── APK/
│   └── app-release.apk
│
├── frontend/
│   ├── android/
│   ├── ios/
│   ├── App.tsx
│   ├── index.js
│   ├── package.json
│   └── ...
│
├── server.js
├── db.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## Deployment Link

https://nutrimate-task.onrender.com/

Opening the deployment link displays:

```text
Nutrimate Backend Running
```

---

## API Endpoint

### Request

```http
POST https://nutrimate-task.onrender.com/hello
```

### Sample Response

```json
{
  "message": "Hi Hello"
}
```

---

## MongoDB Collection Structure

### Collection Name

```text
interactions
```

### Document Structure

```json
{
  "_id": "ObjectId",
  "user_action": "Button Clicked",
  "response": "Hi Hello",
  "timestamp": "Date"
}
```

---

## SQL Equivalent Schema

The assignment allowed either PostgreSQL or MongoDB. This project uses MongoDB Atlas.

Equivalent SQL schema:

```sql
CREATE TABLE interactions (
    id SERIAL PRIMARY KEY,
    user_action TEXT,
    response TEXT,
    timestamp TIMESTAMP
);
```

---

## Running the Backend Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Environment File

```env
MONGODB_URI=<your_mongodb_connection_string>
```

### 3. Start the Server

```bash
node server.js
```

---

## Running the Mobile App Locally

### 1. Navigate to Frontend

```bash
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Metro

```bash
npx react-native start
```

### 4. Run on Android

In a separate terminal:

```bash
npx react-native run-android
```

Requirements:

* Android Studio installed
* Android SDK configured
* USB Debugging enabled or Android Emulator running

---

## APK Build

Generate Release APK:

```bash
cd frontend/android
gradlew assembleRelease
```

Generated APK location:

```text
frontend/android/app/build/outputs/apk/release/app-release.apk
```

---

## Deliverables

* React Native CLI Mobile App Source Code
* Generated Android APK (`app-release.apk`)
* Backend Source Code
* Deployment Link
* MongoDB Database Integration
* Database Schema
* README Documentation

```
```
