# Password-Generator

** This purpose of this project was to create an application that an employee can use to generate a random password based on criteria that they select via a series of prompts --in order to create a strong password that provides greater security.

For this project, the starter code was provided for HTML, CSS and JavaScript. I was required to make the appropriate additions to the Javascript code to ensure functionality matches the provided acceptance criteria (provided in a Given/When/Then approach). Please see the criteria below:

  GIVEN I need a new, secure password
  WHEN I click the button to generate a password
  THEN I am presented with a series of prompts for password criteria
  WHEN prompted for password criteria
  THEN I select which criteria to include in the password
  WHEN prompted for the length of the password
  THEN I choose a length of at least 8 characters and no more than 128 characters
  WHEN asked for character types to include in the password
  THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  WHEN I answer each prompt
  THEN my input should be validated and at least one character type should be selected
  WHEN all prompts are answered
  THEN a password is generated that matches the selected criteria
  WHEN the password is generated
  THEN the password is either displayed in an alert or written to the page
  
When a user (or employee) loads the Password Generator page, they will be presented with this page where they will click on the red "Generate Password" button to begin the process of generating a random password.
![image](https://user-images.githubusercontent.com/88461011/134622075-b2cab4f4-7daa-4cf3-9d7b-0abc9569adf2.png)

As per the above criteria, the user must input their choice of password length (between 8 and 128).
![image](https://user-images.githubusercontent.com/88461011/134622192-125699e6-6cfb-4253-ae30-e0ee7e184d62.png)

Once a valid input is received, the user will be provided with an alert confirming the total characters their password will contain. 
![image](https://user-images.githubusercontent.com/88461011/134622317-de932ed7-523f-4c67-bf29-46b69be641b9.png)

The user can then choose to include each or some of the following criteria to create a random password: upper case letter, lower case letters, numbers and special characters/symbol, respectively. They must choose at least one criteria, if not the prompts start over from the upper case letters onwards.
![image](https://user-images.githubusercontent.com/88461011/134622349-16d125e2-c424-4e68-b3ac-db349fd45c66.png)

Once the user has made their selections for characters that they wish to include in their password, a random password will be generated and it will display within the dotted box at the center of their page, as seen below.
![image](https://user-images.githubusercontent.com/88461011/134622468-ecb924af-c7a8-4226-8fda-a06d381c0a43.png)

To give this application a try, please visit the following link:
https://github.com/rpanglia/password-generator.git

To visit my Password Generator GitHub repository, please see this link:
https://rpanglia.github.io/password-generator/

Take Care,
RP
