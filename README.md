
# Smart shopping Application

This is a full-featured e-commerce application built using **Next.js** and **TailwindCSS**. It includes essential functionalities such as product search with pagination and sorting, a shopping cart, and integration with Stripe for payments and Clerk for Authentication. The state management is handled by **Redux**, and **Axios** is used for API calls.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)

## Features

- **Auth Pages**: Allows create, access and manage user data. Handled using Clerk.
- **Home Page**: Displays a selection of products and promotions.
- **Products Search Results Page**: Allows users to search for products with pagination and sorting options.
- **Cart Page**: Enables users to view and manage their selected items.
- **Stripe Payment Page**: Integrates with Stripe for secure payment processing.
- **Success Page**: Confirms successful orders.
- **Cancel Page**: Handles order cancellations.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Redux**: A state management library for JavaScript applications.
- **Axios**: A React library for data fetching.
- **Stripe**: A payment processing platform.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/Vishnu844/smart-shopping-application.git
    ```
2. Navigate to the project directory:
    ```sh
    cd smart-shopping-application
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a `.env.local` file in the root directory and add your Stripe API keys:
    ```sh
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-publishable-key
    STRIPE_SECRET_KEY=your-secret-key
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
    CLERK_SECRET_KEY=your-secret-key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    ```
5. Run the development server:
    ```sh
    npm run dev
    ```
6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Usage

### Home Page

The home page showcases featured products and promotions. Users can navigate to the product search results page or view details of specific products.

### Products Search Results Page

Users can search for products using keywords. The search results can be paginated and sorted by different criteria such as price, popularity, and ratings.

### Cart Page

Users can add products to their cart and manage the quantities of each item. The cart page displays the total price and allows users to proceed to checkout.

### Stripe Payment Page

The application integrates with Stripe for handling payments. Users can enter their payment details securely and complete their purchase.

### Success and Cancel Pages

- **Success Page**: Displays a confirmation message and order details after a successful payment.
- **Cancel Page**: Informs the user that the payment process was cancelled and provides options to retry or return to the home page.

## State Management

The application uses Redux for managing the global state. This includes the state of the cart, user authentication, and product data.

## Data Fetching

The product search results page uses Axios for data fetching. This ensures that the page is always displaying the most up-to-date product information.

## Dummy Data

Currently, the application uses dummy data to populate the product listings. This can be replaced with real data from an API or a database in the future.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open a pull request or issue.
