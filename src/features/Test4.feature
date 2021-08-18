Feature: Bookin sectiob

    Scenario: Register one room
        Given a user goes to  "https://hosteria-95a60.web.app/login"
        When he is in that section he should login in
        Then go to the rooms 
        And choose one click it
        Then H has to register click in the button "registrar"
        And a form will appear
        Given in the form he has to write all  the valid parametres.
        Then click in confirmar