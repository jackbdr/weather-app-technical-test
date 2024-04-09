# Submission

Hi there,

Thank you for this! Being used to Laravel, I have enjoyed getting to know Symfony... I like it! 
Also, I hadn't heard of Preact before but I thought it worked well for this task. I thought React or something similar seemed a bit overkill and had contemplated using vanilla JS, but Preact seemed like a good compromise.

To run the weather app, first copy the contents of .env.starter to a new .env and add `AVB9JDLQBYR5K39DLEVANKXU3` to the variable "WEATHER_API_KEY". 

Then run the following commands from the root directory:
```
composer install
```
```
symfony server:start
```
In a second terminal:
```
cd preact_app
```
```
npm install
```
```
npm run dev
```
(I realise I have assumed you have the Symfony cli installed. If you don't, please download from https://symfony.com/download. I hope that's okay.)

You should then be able to access the preact_app at "http://127.0.0.1:5173/".

To test scalability, add cities to the array on line 29 of `weather-app-technical-test/src/Helper/WeatherApiHelper.php`. 

I'm looking forward to hopefully speaking. I'd be really interested to hear your thoughts on my submission.

Thank you!

Notes:
- Ideally I will find time to better organise my scss into components. Also, reorganise my use of mixins to be clearer and easier to follow.
- I considered automatically refreshing the page every 15 mins or so but I decided against it as I didn't want to accidentally leave it running over night and run out of API requests.
- I've noticed that Safari doesn't like a "justify-content: end" on the laptop view buttons which I haven't fixed yet. Chrome and Firefox okay though.
- The mobile view quickly starts looking a bit odd when adding more cities, as the buttons start clogging up the screen, but could be easily fixed with dropdown. 

# Weather App Technical Test

## Objective
Your task is to create a weather application that provides a detailed forecast for specific cities around the world. This application will enable users to view a simple weather forecast. While the initial version should focus on London, New York, and Paris, design your solution with scalability in mind to easily add more cities in the future. The application should adhere to the design guidelines provided.

## Design Requirements
- **Figma Designs**: Detailed designs for the application are available for download. You are expected to closely follow these designs to ensure a consistent user experience across different screen sizes. Download the Figma design file from [here](https://drive.google.com/file/d/1jnkWJ57HbBYl5oXLAc_DA1Ut884hOydP/view?usp=drive_link) to import into Figma.
- **Responsiveness**: The application must be responsive, adapting seamlessly to desktop, tablet, and mobile screens based on the designs provided.
- **Icons**: For simplicity, only three icons are provided (Sunny, Rainy and Cloudy). For any weather conditions other than Sunny/Rainy please use the Cloudy icon.

## Development Requirements
- **Framework**: The application should be developed using the Symfony PHP framework.
- **Styling**: Implement styling using Sass to achieve a consistent look and feel as per the design specifications.
- **JavaScript**: You are free to use any JavaScript framework that you are comfortable with to enhance the application's interactivity.
- **API Integration**: Weather data must be fetched from the Visual Crossing Weather API. Consult the [Visual Crossing Weather API Documentation](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/) for integration details.
    - **API Key**: Utilize the API key `AVB9JDLQBYR5K39DLEVANKXU3` for all requests to the Visual Crossing Weather API.

## Submission Process
- **Committing Your Work**: Regular commits and pushes to this repository are encouraged. Ensure your commit messages clearly describe the changes made.
- **Final Submission**: Upon completion, make sure all changes are pushed to your personal repository. Notify us that your submission is ready for review.
- **Updating Documentation**: Update the README file with instructions for running your application locally. This should include environment setup, dependency installation, and any necessary commands. Clearly explain how to use the provided API key within your application setup.

## Evaluation Criteria
- **Functionality**: The application must function as expected, accurately fetching and displaying weather data for the specified cities using the provided API key.
- **Adherence to Design**: Your implementation should closely match the Figma design specifications and exhibit full responsiveness across devices.
- **Code Quality**: We expect clean, well-organized code that follows best practices.
- **Documentation**: Your README documentation should be clear, concise, and comprehensive, offering straightforward instructions for local deployment and API key integration.

---

Good luck! We are excited to see your implementation of the weather application.
