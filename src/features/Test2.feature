Feature: Login section

    Scenario: succesful log-in to the user acount in the hosteria because the email is register in database 
        Given a user opens "https://hosteria-95a60.web.app/Login"
        When the user login with valid parametres email and password
        Then He should look in the top the navbar a option of "profile"
        And other options that was incoporef because is in his account.
        