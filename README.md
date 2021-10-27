# Wales_Test_Ticket
Pre Requsits: 

1: Installation: 

Step 1: Install Node.js and Node Package Manager (npm)  
Step 2: Create a project folder.  
Step 3: Create a package.json file.  
Step 4: Install Cypress using npm.  
Step 5: Open Cypress.  
        npx cypress open (Used to open form NODE Command Prompt)  
        Note : npx is available with npm > 5.2 version only  

For Cypress Installation and Documentation:Use Following Link  
 
[Cypress Installation and Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress)

2: Code Snippet to Add in Cypress.Json 

# In Cypress.json file add this: 
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
  Step 4: Go to NPM Terminal and Give command "npx cypress open"  
  Step 5: Wait for the Cypress CLI to open  
  Step 6: On CLI Navigate to integration folder (Here js file will be placed)  
  Step 7: Click on the File , It will start excesuting the test  