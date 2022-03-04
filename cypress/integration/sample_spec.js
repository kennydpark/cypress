// pass
// describe('My First Test', () => {
//   it('Does not do much', () => {
//     expect(true).to.equal(true)
//   })
// })

// fail
// describe('My First Test', () => {
//   it('Does not do much', () => {
//     expect(true).to.equal(false)
//   })
// })

// describe('My First Test', () => {
//   it('Visits the kitchen sink', () => {
//     // Arrange - setup initial app state
//     // - visit a web page
//     cy.visit('https://example.cypress.io')
//     // - query for an element
//     // Act - take an action
//     // - interact with that element
//     // Assert - make an assertion
//     // - make an assertion about page content
//   })
// })

// describe('My First Test', () => {
//   it('Finds an element', () => {
//     // Arrange - setup initial app state
//     // - visit a web page
//     cy.visit('https://example.cypress.io')
//     // - query for an element
//     // cy.contains('type')
//     // Act - take an action
//     // - interact with that element
//     cy.contains('type').click()
//     // Assert - make an assertion
//     // - make an assertion about page content
//   })
// })

// describe('My First Test', () => {
//   it('Finds an element', () => {
//     // Arrange - setup initial app state
//     // - visit a web page
//     cy.visit('https://example.cypress.io')
//     // - query for an element
//     // cy.contains('type')
//     // Act - take an action
//     // - interact with that element
//     cy.contains('type').click()
//     // Assert - make an assertion
//     // - make an assertion about page content
//     cy.url()
//     .should('include', '/commands/actions')

//     cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com')
//   })
// })

describe('My First Test', () => {
  it('Finds an element', () => {
    // Arrange - setup initial app state
    // - visit a web page
    cy.visit('https://example.cypress.io')
    // - query for an element
    // cy.contains('type')
    // Act - take an action
    // - interact with that element
    cy.pause()
    cy.contains('type').click()
    // Assert - make an assertion
    // - make an assertion about page content
    cy.url()
      .should('include', '/commands/actions')
    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
