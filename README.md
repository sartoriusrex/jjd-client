# Jiu Jitsu Distilled Version 1.1.0

# license: MIT

## Updated 06/08/2019

### Description

This is a personal project CRUD app that allows users to document Brazilian Jiu Jitsu techniques they've learned, cross-reference them, and build sequences to drill and reference later. The repo has two submodules for deploying to two separate servers: client and server. 

### Technologies Used:
- CRA
- React
- Redux
- Redux-Form
- Bootstrap
- Mongo
- Mongoose
- Express
- JWT
- bcryptjs
- Axios
- Mailgun-js
- Heroku
- mLab

### Current Features:

1.  Account Authentication and Authorization
2.  Account Verification Via E-mail
3.  Password Reset / Forgot Password
4.  Account Username, Email, and Password Updating
5.  Technique and Sequence Search, including quicksearch( All, Created by current user, liked)
6.  Send email feedback
7.  Share techniques and sequences via email

### Future Features:

1.  ~~Sharing Techniques and Sequences to other users via in-app inbox or email.~~
2.  More svg icons to spice things up - including better styling and animations and more custom css
3.  Search filter functionality - Filter by
  1. Type
	2. Positions
	3. Mode
	4. Author 
4.  Better thumbnail compatibility - currently can only take thumbnails from Youtube videos - take thumbnails from FB links is next; Thus integration with FB dev api is next major step using GraphQL Queries
5.  Possibly image uploads using cloudinary and multer.
6.  Drag & Drop Sequence editting instead of clicks.
7.  Verify Account Changes by sending email to user's email( before and after email change, if that's the change ). If user did not request change, block account and send new token to user to verify user again.


### Known Bugs and Necessary Refactors:

1.  Current manner of adding entries and reactions in technique editting is by actual technique update and api call to server. Need to refactor to store initial values in separate object for importing each time TechForm is rendered. This type of update also resets the form on reload.
   
	 * This method is currently in use with Sequences, but is buggy and produces an error where inputs are changing from controlled to uncontrolled - need to research more on how to fix this
2.  Currently the only method of verifying if an e-mail address is deliverable is by attempting to send an email using mailgun-js. Their paid version offers its own functionality to verify instead of attempting to deliver. This is one option or I need to research another option of server-side email deliverability verification.
3.  Current method of keeping techs and seqs when users are deleted is by reassigning techs and seqs to an established user named Delete. This method works but is not ideal. Need to research other ways to keep information while respecting users desire to delete their accounts.
4.  TechniqueForm always reloads previous values after loading a technique. Initial values need to be reset; however, the manner in which this is done isn't compatible with the manner in which technique refs are added. This is a major refactor related to Refactor #1.
5. Bootstrap js files currently imported in index - will refactor app to not use external js files.

==========
#Below is the normal readme for CRA, left here for documentation purposes
==========

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
