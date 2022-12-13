1-Download & install nodejs
2-Download & install visual studio code (VSCode)
3-Create a new folder for project & open in VSCode
4-Open cmd/terminal then execute below command
    npm -i init ---> creates package.json file
5-To install cypress
    npm install cypress --save -dev
6-Start Cypress
    npx cypress open (or)
    node_modeules/.bin/cypress open

---------tests run option---------
npx cypress run => all test run headless
npx cypress run --headed => with UI
npx cypress run --spec ...cy.js => run specific file
npx cypress run --browser chrome => browser option

-------------------------------------------

testSuite ---> TestCase--Test Steps
Spec File(cy.js)--> describe blocks(test suites)--it blocks(test)

--------------Locators----------------------
cy.get(Locator)

CSS Selector
-----
tag id
tag class 
tag attr.
tag class attr.

#id
.class
[attribute='value']
.class[attribute='value']

-----------XPATH PLUGIN INSTALL----------------
npm install -D cypress-xpath

add entry in commonds.js
/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

add entry in e2e.js
require("cypress-xpath")

Cypress Assertion
----------------

1) Implicit assertion
    should
    and

eq
contain
include
exist
have.lenght
have.value
etc..


2) Explicit assertion
expect  --BDD
assert  --TDD

Cypress iframe plugin
*****************
npm install -D cypress-iframe