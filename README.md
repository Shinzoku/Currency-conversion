# Currency Converter

## Introduction

This project is a simple web-based currency converter application. It allows users to convert an amount from one currency to another using the latest exchange rates. The application is built using HTML, CSS, and JavaScript, and it utilizes the ExchangeRate API to fetch current exchange rates.

## Structure

The project consists of three main files:
- `index.html`: The HTML file that defines the structure of the web page.
- `styles.css`: The CSS file that provides styling for the web page.
- `app.js`: The JavaScript file that contains the logic for fetching exchange rates and performing the currency conversion.

## Explanation

### HTML Structure
+ The HTML file includes a form where users can input the amount they want to convert, select the source currency, and select the target currency.
+ There is also a div where the conversion result is displayed.

### CSS Styling
+ The CSS file ensures the web page is visually appealing and user-friendly.
+ It styles the form elements and the result display to create a cohesive look.

### JavaScript Functionality
+ The JavaScript file handles the core functionality of the application.
+ It fetches the list of available currencies from the ExchangeRate API and populates the `select`.
+ When the user submits the form, it fetches the conversion rate and calculates the converted amount, which is then displayed on the page.

## Features

- **Dynamic Currency List**: The application fetches the latest list of currencies from the API and populates the dropdown menus dynamically.
- **Real-time Conversion**: The conversion is done in real-time based on the latest exchange rates fetched from the API.
- **User-friendly Interface**: The application has a clean and simple interface that is easy to use.

## Getting an API Key from ExchangeRate API

To use the ExchangeRate API, you need to obtain an API key. Follow these steps to get your API key:

1. Go to the [ExchangeRate API website](https://www.exchangerate-api.com/).
2. Click on the "Get Free API Key" button.
3. Sign up with your email and create a password.
4. After signing up, you will receive a confirmation email. Click the link in the email to verify your account.
5. Once your account is verified, log in to your ExchangeRate API account.
6. In your dashboard, you will find your API key. Copy this key.

Replace `YOUR_API_KEY_HERE` in the JavaScript code (`script.js`) with your actual API key.


## Cloning the Project

To clone and run this project on your local machine, follow these steps:

1. Clone the repository:

    + SSH :

    ```bash
        git clone git@github.com:Shinzoku/Currency-conversion.git
    ```

    + HTTPS :

    ```bash
        git clone https://github.com/Shinzoku/Currency-conversion.git
    ```
2. Open index.html in your web browser to view the application.

## Author

This project was created by **Nicolas Bernon**. Feel free to contact me for any questions or suggestions.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software as per the terms of the [license](LICENCE.txt).