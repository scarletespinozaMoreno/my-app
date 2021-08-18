Feature: contact section

    Scenario: sending a email to the administrator
        Given a user goes to  "https://hosteria-95a60.web.app/Contact"
        When he is in that section he should complete all the contact form including the text message with valid email
        Then He should look a message that satified 
        