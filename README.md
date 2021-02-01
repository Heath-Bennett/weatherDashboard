# Weather Dashboard

## Description

This site displays the weather for the city entered by user.  The user is presented with the current weather as well as the five day forecast.  All cities searched for are saved in history. 

[Link to GitHub repository](https://github.com/Heath-Bennett/weatherDashboard)

[Link to deployed page](https://heath-bennett.github.io/weatherDashboard/)

## Table of Contents

* [Image of Index.html](#Image-of-Index.html)
* [Search and History](#Search-and-History)
* [Current Weather](#Current-Weather)
* [UV Index](#UV-Index)
* [Five Day Forecast](#Five-Day-Forecast)
* [Colors Used](#Colors-Used)
* [Collaborators](#Collaborators)
* [How I Would Like to Improve the Project](#How-I-Would-Like-to-Improve-the-Project)
* [License](License)

## Image of Index.html

![Screenshot of website](./Assets/Images/website.png)

## Search and History

The user enters the city into the text box and clicks the button with the magnifying glass.  This causes the city to be save to history.  Then the current weather and five day forecast is displayed for the city.  The user is able to click any of the cities in history and the current weather and five day forecast will be displayed.  Upon page load the last city entered into the text box is displayed. 

![screenshot of search and history](./Assets/Images/searchAndHistory.png)

## Current Weather

The current weather displays the city searched for, the date, icon representation of the weather, Temperature, Humidity, Wind Speed and UV index are displayed. 

![Screenshot of Current Weather](./Assets/Images/currentWeather.png)

## UV Index

The UV rating is displayed using the Global Solar UV Index. A rating of 1-2 is low, 3-5 is moderate, 6-7 is high, 8-10 is very high, 11+ is extreme.  These are colored with low being green, moderate is yellow, high is orange, very high is red, and extreme is purple.

![Image of Global Solar UV Index](./Assets/Images/UVrating.png)

This chart was retrieved from:

[Foresthillweather.com](http://www.foresthillweather.com/UV-forecast.php)


## Five Day Forecast

The Five Day Forecast displays the date, an icon representation of the day's weather, temperature, and humidity.

![Screenshot of Five Day Forecast](./Assets/Images/fiveDay.png)

## Colors Used

The colors were chosen using [Adobe Color](color.adobe.com) 

![Screenshot of Weather](./Assets/Images/siteColors.png)

## Collaborators

Thank you Tristan LaRoche for helping me straighten out my issues with search history!

## How I would like to improve the project

I would like to add a Dynamic background image and themed colors that change according to what the current weather is.   

I would also like to find a better API to use this one does not give accurate coordinates even if you were to search by city and state.  I have found it only works for major cities. 