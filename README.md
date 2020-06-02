# DEMO Streaming

## Description

Exciting and new platform where you are able to quickly and easily stream your favorite series and shows based on your profile.

## Installation

To setup this application please follow these instructions:

1. Clone this repository by clicking the **Clone or download** button.
2. Run the `git clone` command on your terminal to clone this repository and add the link provided by GitHub.
3. A folder named Remote-Roofing will be added and you must change into this directory by running the following command `cd Remote-Roofing` on your terminal. 
4. Once inside the Remote-Roofing directory you must run `npm install` or `yarn install` to install all the necessary dependencies. Please make sure you have either **npm** or **yarn** installed on your computer
5. Run any of the scripts in the *Available Scripts* section to either start, test or build the application for production. These commands must be run in the terminal.

## Available Scripts

`yarn start` or `npm start`
Running this command will start the development server. The server will automatically reload when changes are made and saved.

`yarn test` or `npm test`
This command will launch the test runner(Jest) in watch mode.
This application contains several unit tests to make sure it behaves as expected.

`yarn build` or `npm build`
Builds the app for production to the build folder.
It bundles React in production mode and optimizes the build for the best performance.

## Dependencies

Below is a list of additional dependencies used:

1. `axios` -> Promise based HTTP client for the browser and node.js. It serves as an alternative to the *fetch* api.
   1. This lightweight package in combination with ES6 `async/await` allows you to write clean and more readable code.
2. `node-sass` -> It allows you to natively compile `.scss` files to `css` at incredible speed and automatically via a connect middleware.
   1. Chose to use this package in order to use SASS instead of plain CSS because it provides extra functionality.
   2. Using SASS allows the use variables, mixins, partials, nesting, among other features. These features allow me to write clean, well structured and reusable code.
3. `react-router-dom` -> This package provides an array of navigational components, which make single page application feel more like a multi-page application.
   1. Used this package to create the navigation between the "Home" page and the "Series" and "Movies" pages.
4. `react-spinners` -> Provides an array of components that represent different animated loading icons.
   1. Using this package to provide a better user experience. 
5. `uuid` -> This npm package unique identifier.
   1. When rendering a list in a React application you need to provide a key prop to each element with a unique identifier. This helps React identify which elements have changed in order to re-render those elements that have changed.

------------

I decided to take advantage of some of the latest React and one of those was to use the React Hooks API to create my components. The reason for this is because React Hooks allows you to use functional components instead of class based components. Functional components provide a cleaner, readable and more concise structure to each component. In addition, I added unit tests to the application to make sure components are rendering the correct and expected content.

I separated the application into three distinct sections(Header, Content, Footer). The Header and Footer sections contain static information and are being reused throughout the different pages in the application. The Content section contains dynamic data. The `react-router-dom` package was used to show different components with different data depending on the page you navigate to.

--------------
I believe that no application or software is perfect and there is always room for improvement. Something I definitely would like to improve is the responsiveness of the application, especially how it looks in very small devices as well as very large devices(like TVs). I believe in accessibility for everyone and everywhere. 

Another aspect of the application I would like to improve revolves around the area of performance, specifically when it comes to the data that is being retrieved from the JSON feed. Currently the JSON feed provides a list of 100 series and movies but we are only displaying 21 of them. In other words we are over-fetching data and this can have a negative impact on the performance of the application. To fix this issue I will probably use GraphQL to only request and receive the data that I need.

--------------
If I was allocated more time I would probably do additional research in ways that I can provide a better user experience and I also would've created a better roadmap for building the application. 
