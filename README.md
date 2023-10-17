# Research Software Engineer Technical Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for the frontend and [Springboot Framework](https://spring.io/projects/spring-boot) for backend.

## Project Setup

### Pre-requisites

- Java Environment
- Node.js

### Setup

- Clone the [repository](https://github.com/AnushaDeviR/qmul-clinical-trail.git) (branch: main) for the updated code.
- Run the command `./mvnw spring-boot:run` after navigating to the folder named: `XYZClinicalTrailServer`.
- The backend server would start running at [http://localhost:8080](http://localhost:8080)
- Navigate to the `client` folder and run `npm install` to install all the required packages for the front-end application to run.
- Run `npm start` to locally run the application at [http://localhost:3000](http://localhost:3000)
- Run `npm test` for the test cases at the front-end to be tested.

## API Blueprint

The following project contains four API endpoints to initiate CRUD (Create, Read, Update and Delete) methods that runs on the backend server (localhost:8080) and below are the following:

1. GET - `/getAllPatientDetails`
2. POST - `/addPatient`
3. UPDATE - `/updatePatientById/{id}`
4. DELETE - `/deletePatientById/{id}`

## Functionalities

![Frontend Application](application.png)

- The following application allows insertion of patient data. It serves as a platform to recruit clinical trail patients for the clinic - XYZ.

![Pop-up form to edit or add patient details](pop-upForm..png)

- The application can be used to update existing patient data or delete it.
- The data are stored within an in-memory storage in the server. For this application the [h2 in-memory](https://www.baeldung.com/spring-boot-h2-database) has been utilized.

### Future works

- Add validation to the data fields on front-end application
- Convert the data table into Excel sheet
