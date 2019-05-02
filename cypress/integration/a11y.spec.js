describe( 'Top tab', function() {

	it( 'Verify first tab is visible', function() {
		cy.visit( '/' );

		cy.get( '#tab-js-tab1' ).parent().should( 'have.class', 'is-active' );
		cy.get( '#js-tab1' ).should( 'have.attr', 'aria-hidden', 'false' );
	} );

	it( 'Click on second tab', function() {
		cy.get( '#tab-js-tab2' ).click();

		cy.get( '#tab-js-tab1' ).parent().should( 'not.have.class', 'is-active' );
		cy.get( '#js-tab1' ).should( 'have.attr', 'aria-hidden', 'true' );
	} );

	it( 'Confirm first tab is not selected', function() {
		cy.get( '#tab-js-tab1' ).should( 'have.attr', 'aria-selected', 'false' );
		cy.get( '#tab-js-tab1' ).parent().should( 'not.have.class', 'is-active' );
	} );

	it( 'Confirm first tab content is not visible', function() {
		cy.get( '#js-tab1' ).should( 'have.attr', 'aria-hidden', 'true' );
		cy.get( '#js-tab1' ).should( 'not.have.class', 'is-active' );
	} );

	it( 'Confirm second tab is selected', function() {
		cy.get( '#js-tab2' ).should( 'have.attr', 'aria-hidden', 'false' );
		cy.get( '#tab-js-tab2' ).parent().should( 'have.class', 'is-active' );
	} );

	it( 'Confirm second tab content is visible', function() {
		cy.get( '#js-tab2' ).should( 'have.attr', 'aria-hidden', 'false' );
		cy.get( '#js-tab2' ).should( 'have.class', 'is-active' );
	} );

} );

describe( 'Left tab', function() {

	it( 'Verify first tab is visible', function() {
		// Load demo
		cy.visit( '/' );

		// Verfiy first tab is visible
		cy.get( '#tab-js-tab1-alt' ).parent().should( 'have.class', 'is-active' );
		cy.get( '#js-tab1-alt' ).should( 'have.attr', 'aria-hidden', 'false' );
	} );

	it( 'Click on second tab', function() {
		cy.get( '#tab-js-tab2-alt' ).click();

		cy.get( '#tab-js-tab1-alt' ).parent().should( 'not.have.class', 'is-active' );
		cy.get( '#js-tab1-alt' ).should( 'have.attr', 'aria-hidden', 'true' );
	} );

	it( 'Confirm first tab is not selected', function() {
		cy.get( '#tab-js-tab1-alt' ).should( 'have.attr', 'aria-selected', 'false' );
		cy.get( '#tab-js-tab1-alt' ).parent().should( 'not.have.class', 'is-active' );
	} );

	it( 'Confirm first tab content is not visible', function() {
		cy.get( '#js-tab1-alt' ).should( 'have.attr', 'aria-hidden', 'true' );
		cy.get( '#js-tab1-alt' ).should( 'not.have.class', 'is-active' );
	} );

	it( 'Confirm second tab is selected', function() {
		cy.get( '#js-tab2-alt' ).should( 'have.attr', 'aria-hidden', 'false' );
		cy.get( '#tab-js-tab2-alt' ).parent().should( 'have.class', 'is-active' );
	} );

	it( 'Confirm second tab content is visible', function() {
		cy.get( '#js-tab2-alt' ).should( 'have.attr', 'aria-hidden', 'false' );
		cy.get( '#js-tab2-alt' ).should( 'have.class', 'is-active' );
	} );

} );
