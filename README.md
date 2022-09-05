
# ShredFish
> Global Surf Forecasting app for daily use. Get notified when the weather and ocean conditions are optimal for the sport of wave Surfing. Personal Portfolio Project to display abilities to work with external api's.
> 
> Live demo [_here_](https://shredfish.surge.sh).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)


## General Information
The ultimate goal of ShredFish is to get Notified when the surf forecast is .. well.. right on!
Surfers check forecasting services on a daily basis, looking for the right conditions. Instead of having to check yourself, ShredFish notifies you when the conditions are optimal for surfing in your favorite location(s).

In the first stage, ShredFish provides daily forecasting like any other services.

Ultimately, the user should be able to define the preferred conditions for their favorite locations, and get notified when the forecast meets their preferences. 

My personal goal is to experiment with data from external API's, and building a front-end React app with it. 
Being a surfer myself, i'd love for ShredFish to be my go-to app for daily forecasting!

## API's used
I started this project seeing that Magic Seaweed and Surfline, both popular surf forecasting apps, offered free API's with access to its forecasting data. 
Learning eventually that acces to these API's were being limited, I had to look for a different solution.
MSW had stopped distributing API keys. 
Surfline allowed for access on local host only, blocking all CORS-request.
I finally found another API that provided paid access to marine forecasting data.
Weather data is provided by the OpenWeather api.


## Technologies Used
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.


## Features
- Search locations directly on global scale.
- Get current weather info for all known GPS locations.
- Get current wind info for all know GPS locations.
- Get current Swell info for locations that are located at sea. 
- Get current Tide info for locations that are located at sea.
- Get current additional info like sunrise and sunset.

- Get detailed forecast for swell, wind and tides up to 9 days.
- Forecast available in 6-hour, 3-hour and hourly intervals.

- Save spots to favorites // remove

## Screenshots
![Home screen](https://user-images.githubusercontent.com/62893479/187225048-517b88e1-4da3-4880-9e00-3d24a6a95e32.png)


![SpotHeader](https://user-images.githubusercontent.com/62893479/187225580-0e95db4c-b0e8-496a-b11e-c9fb9f953e7b.png)


## Setup
Visit https://shredfish.surge.sh and give it a spin!

## Usage
- Type the name of a city you would like to find.
- Further specify your search with comma's, adding state and country:
  Salinas, Asturas, ES
- Select the location of choice from the results list.

- Save a location by clicking the heart right next to it's name.
- Switch between favorite locations by clicking it's name in the 'My Favorites List'
- Remove a location from your favorites by clicking the heart icon after it's name.


## Project Status
Project is: _in progress_ 


## Room for Improvement
The project is far from completed. In the future, i would like to create a back end where the user can actually login and save it's data.
Now using GPS locations, a spot database can be build that provides far more detailed info about a spot, like recommended conditions, photo's, and additional information about the surrounding and accesibility.

Room for improvement:
- Styling of forecast buttons and tables.

To do:
- Load astronomy data into forecast (sunrise, sunset, dusk, dawn)
- Load water temperature 
- Set preferred conditions per spot
- Hightlight preferered conditions in forecast
- Notify user when prefered conditions are available in forecast


## Acknowledgements
- This project was inspired by the Magic Seaweed forecasting app, and the Surfline forecasting app.


## Contact
Created by [@arejasverduras](https://arejasportfolio.surge.sh/) - feel free to contact me!
