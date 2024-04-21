# News App

## Overview
The News App is a React-based application designed to allow users to search for news articles using various filters such as keywords, languages, and date ranges. With the [NewsAPI](https://newsapi.org/docs)
, the app fetches news articles based on user preferences and displays them in a responsive UI, with pagination controls to navigate through results.

## How to use?
- Register for a News API key from [NewsAPI](https://newsapi.org/) and store it securely.
- Create a .env file to store your API key (e.g., REACT_APP_NEWS_API_KEY=your-api-key-here).

## Key Features
- Dynamic search functionality
- Filter options including language, dates, and sorting preferences
- Pagination for navigating through pages of results
- Responsive design for compatibility across different devices
- Conditional rendering for user-friendly interaction

## Technologies Used
- React for efficient UI rendering and state management
- CSS for styling and ensuring a visually appealing interface
- NewsAPI for fetching news articles based on specified parameters

## Testing Methodologies

### Postman Testing
Before development, Postman was extensively utilized to validate API endpoints, query parameters, and request responses. Key aspects tested include:
- API endpoint responsiveness and structure
- Different combinations of query parameters
- Simulation of various scenarios including error responses and HTTP status codes

### Chrome Dev Tools Usage
Chrome Developer Tools played a pivotal role in testing and debugging the application:
- **Console**: `console.log()` was used strategically to checkpoint bugs, trace code execution, and verify application states.
- **Network Tab**: Monitored API requests and responses in real-time, inspecting payloads, HTTP status codes, and error messages.

These testing methodologies ensured thorough validation of the application's functionality and robustness.

## Prototype and Requirement Analysis

### API Documentation Review
- Reviewed the API documentation thoroughly to understand available functions and endpoints.
- Identified key functions that could be utilized to develop features and functionalities for the application.

### Brainstorming Ideas
- Brainstormed ideas for features and functionalities based on the API functions.
- Considered user needs and preferences to prioritize feature development.

### Prototype Development
- Created a rough prototype for the UI using Figma, focusing on layout and basic design elements.
- Developed hand sketches for UI and UX design, iterating on initial ideas and incorporating feedback.
- Iteratively refined the prototype based on user testing and feedback to ensure a user-friendly experience.


## Usage
1. Enter a search term in the input field.
2. Optionally select a language, specify date ranges, and choose sorting preferences.
3. Click the "Search" button to fetch news articles based on the entered criteria.
4. Navigate through the search results using pagination controls.
5. Optionally toggle the display of headline news for additional information.

## Challenges Encountered

### Rate Limiting Issue with NewsAPI
During the development and testing phase, one significant challenge arose related to the rate limiting restrictions imposed by the NewsAPI. The API allows only 50 requests every 12 hours for developer accounts, with a maximum of 100 requests per day. As I was testing and refining the application's functionalities, I encountered the Status 429 "Too many requests" error, indicating that the rate limit had been exceeded. I had to register a new API key from new email.

#### Resolution
When I encountered the rate limiting issue it made me to consider broader aspects of error handling and user feedback. I realized the importance of informing users when the API returns an error status code or fails to respond. To address this, I implemented features such as displaying a "No results found" message when no news items are fetched. Additionally, I included console error logging to identify and debug any errors that arise during API interactions. These measures ensure that users are informed of any issues and provide a means for developers to diagnose and resolve problems effectively in the future.






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
