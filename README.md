# FinSmart

FinSmart is a finance management and advisor tool. This application helps you manage your finances with an intuitive user interface and powerful features. Built using modern technologies, it offers a comprehensive solution for tracking incomes, budgets, and expenses, along with personalized financial advice.

## Features

- **Dashboard Pages**:
  - **Incomes**: Easily track and manage all your income sources.
  - **Budgets**: Set and view budgets to keep your spending in check.
  - **Expenses**: Monitor and categorize your spending to better manage your finances.

- **Personalized Financial Advice**: Receive tailored financial recommendations based on your budget, income, and spending data using the Google Gemini API.

- **Interactive Charts**: Visualize your financial data with interactive charts and graphs using Recharts.

- **User Authentication**: Securely manage user accounts with Clerk for authentication and user management.

- **Responsive Design**: Enjoy a seamless and intuitive experience on both desktop and mobile devices, styled with Tailwind CSS.

## Tech Stack

- **Next.js**: A React framework for building server-side rendered and statically generated applications.
- **PostgreSQL**: A powerful relational database for storing financial data.
- **Neon**: Managed PostgreSQL database service for simplified database management.
- **Drizzle ORM**: Object-relational mapper for working with PostgreSQL.
- **Google Gemini API**: Provides personalized financial advice using advanced AI models.
- **Recharts**: A charting library for creating interactive and responsive charts.
- **Clerk**: Authentication service for secure user management.
- **Tailwind CSS**: A utility-first CSS framework for designing modern and responsive user interfaces.

## Demo:
![Screenshot (108)](https://github.com/user-attachments/assets/2b4a1236-75b0-4a54-a8eb-d511998324ad)

![Screenshot (105)](https://github.com/user-attachments/assets/3be45bb2-fe74-401b-96e9-19ca6784e07b)

![Screenshot (106)](https://github.com/user-attachments/assets/17ed4790-5495-437a-8694-a3bedee59c7b)

![Screenshot (107)](https://github.com/user-attachments/assets/ca2446e8-e7a2-40e0-b4f0-7f32608bc8ef)

## Usage

- **Dashboard Navigation**:

Use the sidebar to navigate between the Incomes, Budgets, and Expenses pages.
Each page displays relevant data and allows for interaction and management.

- **Personalized Financial Advice**:

Enter your financial details and preferences to receive personalized advice on how to better manage your finances.

- **Charts and Visualizations**:

Utilize interactive charts to analyze your financial data visually.

## Installation

Follow these steps to get the application up and running:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/budget-management-app.git
   cd budget-management-app```

2. **Install dependencies**:
   ```bash
   yarn install

3. **Set Up Environment Variables**:
Create a .env.local file in the root directory of your project with the following content:
```bash
NEXT_PUBLIC_DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_GEMINI_API_KEY=
```
4. **Run Migrations (if applicable)**:
   ```bash
   yarn drizzle migrate
   ```
5. Start the Development Server:
 ```bash
yarn dev
```
