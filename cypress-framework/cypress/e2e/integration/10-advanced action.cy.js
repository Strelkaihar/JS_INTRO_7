describe("Keyboard and Mouse actions", () => {

    it("Keyboard actions ", () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Html Elements');

        // cy.get('#dropdown-button').trigger('mouseover');
        cy.get('#text_input1').realClick().realType('Bravo').realPress('Tab').realPress('KeyB')
        .realPress('ArrowLeft').realPress('R').realPress('ArrowRight').realPress('Backspace');
        
        
    });
    it("Click, right click and double click ", () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Actions');
        /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Actions" card
   * Verify that the user is redirected to the Actions page
   * Verify that the first three web elements are present and labeled as "Click on me", "Right-Click on me", and "Double-Click on me"
   * Perform a click action on the first web element labeled "Click on me"
   * Verify that a message appears next to the element stating, "You clicked on a button!"
   * Perform a right-click action on the second web element labeled "Right-Click on me"
   * Verify that the message appears next to the element stating, "You right-clicked on a button!"
   * Perform a double-click action on the third web element labeled "Double-Click on me"
   * Verify that the message appears next to the element stating, "You double-clicked on a button!"
   */
        cy.title().should('eq', 'TechGlobal Training | Actions')
        cy.url().should('eq', 'https://techglobal-training.com/frontend/actions')
        cy.get('#click').should('have.text', 'Click on me').click().next().should('have.text', 'You clicked on a button!');
        cy.get('#right-click').should('have.text', 'Right-Click on me').rightclick().next().should('have.text', 'You right-clicked on a button!');
        cy.get('#double-click').should('have.text', 'Double-Click on me').dblclick().next().should('have.text', 'You double-clicked on a button!');
    })

    it("Drag and drop", () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Actions');

        //cy.get('dragAndDrop elemebnt').drag(whereYouWantToMoved)

        // * Go to https://techglobal-training.com/frontend/
        // * Click on the "Actions" card
        // * Verify that the last two web elements are present and labeled as "Drag Me", and "Drop Here",
        // * Perform a Drag and Drop action on the "Drag Me" web element, and drop it to "Drop Here"
        // * Verify that the first web element "Drag me" is successfully dropped into the second web element "Drop Here"
        // * Verify that a message appears next to the  web element stating, "An element dropped here!"
      
        cy.get("button[id*='dr']:first-child").should('have.text', "Drag Me");
        cy.get("button[id*='dr']:last-child").should('have.text', "Drop Here")
        cy.get('#drag_element').drag('#drop_element')
        cy.get("button[id*='dr']:last-child").should('have.attr', 'id', 'drag_element')
        cy.get('#drag_and_drop_result').should('have.text', 'An element dropped here!')
    });
    it("Drag and drop", () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Actions');
    });
});