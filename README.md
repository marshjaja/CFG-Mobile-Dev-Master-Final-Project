# Code4GirlsDescription

Code4Girls is an interactive educational app designed to support students
through their Mobile App Development journey. The app serves as a
comprehensive guide, bringing together various aspects of the learning
experience into a single platform.
Code4Girls is not only an educational resource with integrated YouTube videos to
assist learning, but also a community platform that promotes interaction among
students and course leaders. It provides features like course announcements, a
chat room, and a GPA calculator, making it an all-in-one tool for students to keep
track of their coursework, engage in discussions, and monitor their progress.

---

## Features

- Login Page: Allows users to log in to the app and create a new account.
- Announcements Screen: Course leaders post important updates here,
  such as changes in class schedules, homework assignments, and exam
  guidelines.
- Calendar Screen: A user-friendly calendar providing a week view with
  date and time details. Users can add events and reminders to keep track of
  lessons and deadlines.
- Chat Screen: A community chat room where users can send messages to
  all other users and view everyone's messages on a single screen.
- Curriculum Screen: Provides an overview of the course curriculum, along
  with integrated video lessons for each topic, arranged in chronological order for
  easy navigation.
- Results Screen: Allows users to input their grades for various coursework
  and assessments, and calculates the final grade based on the weights of each
  assessment.

## Tech Stack

The tech stack used in this project includes:

1. React Native: A framework for building native mobile applications using
   JavaScript and React.
2. Firebase: A platform that provides various services for building and
   scaling mobile and web applications. In this code, Firebase is used for
   authentication.
   3.Formik: A library for building forms and handling form state in React
   applications.
   4.React Navigation: A library for managing navigation in React Native
   applications, providing a way to navigate between different screens.
3. react-native-splash-screen: A library for displaying a splash screen or a
   launch screen while the app is loading.
   6.react-native-vector-icons: A library that provides a set of customizable
   icons for React Native applications.
   7.React Native Big Calendar: A customisable calendar component for
   React Native applications, used in the Calendar Screen.
4. React Native YouTube Iframe: A package used to embed a YouTube
   player in a React Native application, seen in the Curriculum component.
5. Expo: A framework and platform for universal React applications. It is a
   set of tools and services built around React Native and native platforms
   that help you develop, build, deploy, and quickly iterate on iOS, Android,
   and web apps from the same JavaScript/TypeScript codebase.

## Getting Started

These instructions will get you a copy of the project up and running on your local
machine for development and testing purposes.
Prerequisites
Ensure that you have the following installed on your local machine:

- Node.js
- npm - Node.js package manager, comes with Node.js.
- A working installation of React Native
- Firebase project setup for authentication

Setup:

Clone this repository to a directory of your choosing:

git clone https://github.com/ WittK95/CFG-Masters-Group-2.git

Navigate into the directory of the project:

cd '.\CFGAppShareProject\CFGMaster_Group2_MobileAppProject\'

Install the project dependencies:

npm install

Firebase Configuration:

For Firebase setup, you need to create a new Firebase project and generate your
unique Firebase configuration:

- Go to the Firebase Console
- Create new project
- Navigate to 'Project Settings'
- Here, you can get your Firebase configuration, it looks something like this:

const FIREBASE_CONFIG = {
apiKey: "#####",
authDomain: "#####",
projectId: "#####",
storageBucket: "#####",
messagingSenderId: "#####",
appId: "#####",
measurementId: "#####"
};

Create a new .env file in the root directory of your project, and fill in your
Firebase configuration details as follows:

FIREBASE_API_KEY=#####
FIREBASE_AUTH_DOMAIN=#####
FIREBASE_PROJECT_ID=#####
FIREBASE_STORAGE_BUCKET=#####
FIREBASE_MESSAGING_SENDER_ID=#####
FIREBASE_APP_ID=#####
FIREBASE_MEASUREMENT_ID=#####

Make sure that your .env file is added to your .gitignore file so that your Firebase
configuration is not committed to your git repository.
Running the Application
Start the application:
npm expo start
By following these instructions, you should now be able to run a local instance of
the application!

## Usage

In this section, we will guide you on how to use each feature in the Code4Girls
app.

1. Login Page: When you launch the application, you will be directed to the
   login page. If you are a new user, click on 'Create a new account' and fill in
   your credentials. If you are an existing user, enter your credentials to log
   in.
2. Announcements Screen: This screen will be the first one you see after
   logging in. It contains all important announcements from course leaders.
   Check this screen regularly to stay updated on class schedules, homework
   assignments, and exam guidelines.
3. Calendar Screen: To access the calendar screen, navigate through the
   app menu at the bottom of the screen and select the calendar option.
   Here, you will see a week view with date and time details. To add events or
   reminders, click on the '+' icon. Fill in the details and save. To view the
   previous or the following week, scroll to the right or left of the screen.
4. Chat Screen: To join the community chat, select the chat option from the
   app menu. Here, you can send messages to everyone in the chat room,
   view other people's messages, and engage in discussions.
5. Curriculum Screen: The curriculum screen is where you will find all the
   course material arranged in chronological order. You can scroll through the
   page to explore each topic and click on the ‘Play’ button to view the
   integrated video lessons.
6. Results Screen: The results screen allows you to input your grades for
   various coursework and assessments. To calculate your final grade, simply
   type the grade of each coursework and assessment and click on the
   ‘Calculate Final Grade’ button. This will calculate the final grade based on
   the weights of each assessment as well as the grade classification.

## Contributing

This project is currently not accepting contributions from outside developers.
Thank you for your interest!

## Viewing the App on a Real Device (via Expo)

While this application is not deployed to an App Store, you can still run the app
on your physical device using the Expo Go app. Here's how:

1. Install the Expo Go app on your mobile device. You can find this in the App
   Store (iOS) or the Google Play Store (Android).
2. On your local machine, start the application by running the command npm
   expo start.
3. A QR code should appear in your terminal or in a new browser tab.
4. Open the Expo Go app on your phone and tap "Scan QR Code" (you may
   need to give the app permission to use your camera).
5. Scan the QR code in your terminal or browser.
6. The application should now open in the Expo Go app on your device.

## Authors and Acknowledgment

This application was developed as part of the Code First Girls course, a program
aimed at increasing the number of women in tech.

## Development Team:

- Witt - Results Page and Integration
- Marcia - Login and Calendar Page
- Manisha - Stylesheet and Announcements Page
- Maria - Chat Page
- Laura - Curriculum Page
  We, the development team, followed agile practices, iteratively working on our
  respective sections and integrating them into the project, while continually
  testing and refining our work.

## Acknowledgment:

We would like to express our gratitude to our instructors, Amy Stell and Sidd
Notani, for their guidance and support throughout this course.
Special thanks to Code First Girls for providing us with this opportunity to learn
