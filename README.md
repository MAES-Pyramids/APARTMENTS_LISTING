# Application Deployment

The application has been successfully deployed and can be accessed through the following links:

- **Frontend**: [https://api.quickr.tech/departments](https://api.quickr.tech/departments)
- **Backend**: [https://api.quickr.tech/nawy/api/v1](https://api.quickr.tech/nawy/api/v1)

## API Documentation & Postman Collection

For API documentation, Swagger has been used, and you can access it here:

- **Swagger Docs**: [https://api.quickr.tech/nawy/docs#/](https://api.quickr.tech/nawy/docs#/)

Additionally, a Postman collection containing all the API endpoints with a preconfigured production environment is available here:

- **Postman Public Collection**: [https://www.postman.com/planetary-crater-6191/workspace/my-workspace](https://www.postman.com/planetary-crater-6191/workspace/my-workspace)

### The collection includes the following endpoints:

#### Authentication
- **Seed Admins**
- **Signup as User**
- **Login as Admin or User**    Default Admin Credentials:   Email: `admin@nawy.com`   Password: `nawy@123456`
- **Get Current Logged-In Account Info**
- **Logout**


#### Apartment Management
- **List all apartments with search, filter, and sorting**
- **Get Apartment Info**
- **Upload Apartment** (Protected Endpoint)
- **Upload Images & Videos**


## Running the Application Using Docker

To run the application locally using Docker, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command:

   ```bash
   docker-compose up
   ```

   This will start the backend, PostgreSQL, and Redis services. However, for the frontend, you need to clone the code separately and run:

   ```bash
   npm run dev
   ```

