# Wales_Test_Ticket
# Pre-Requisites: 

### 1: Installation: 
Step 1: Open Terminal to check the node version.  
        Command For Node Verison is `npm -v` as cypress need Node.js version 12 or 14 and above  
Step 2: Install [Node.js](https://nodejs.org/en/download/)  
Step 3: Open Terminal and Repeat the Step 1       
Step 4: [Install Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) using npm.   
Step 5: Open Cypress.  
        `npx cypress open` (Used to open cypress CLI form NODE Command Prompt)   
        Note : npx is available with npm > 5.2 version only  

### 2: Code Snippet to Add in Cypress.Json  

###### In Cypress.json file add this: 
````
{
    "chromeWebSecurity": false,
    "modifyObstructiveCode": true,
    "experimentalSourceRewriting": true
}
````


# How to Run This Test Suite  

  Step 1: Go to Cypress Folder  
  Step 2: Navigate to Integration Folder in Cypress  
  Step 3: Clone this repository  
  Step 4: Go to NPM Terminal and Give command `npx cypress open`  
  Step 5: Wait for the Cypress CLI to open  
  Step 6: On CLI Navigate to integration folder (Here your test file exists)  
  Step 7: Click on the File , It will start excesuting the test  