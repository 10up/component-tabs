'use strict';

export default function Tabs ( options, callback ) {

	if ( 'undefined' === typeof options.target  ) {
		return;
	}

	let tabs = Array.from( document.querySelectorAll( options.target ) );

	tabs.forEach( tab => {

		let tabContent = Array.from( tab.querySelectorAll( '.tab-content' ) ),
			tabLinks     = Array.from( tab.querySelectorAll( '.tab-list li > a' ) ),
			activeTab    = Array.from( tab.querySelectorAll( '.tab-list li' ) );

		// Set state for the first .tab-item
		let firstTab = tab.querySelectorAll( '.tab-item' )[0];
		firstTab.classList.add( 'is-active' );

		tabLinks.forEach( ( tab, index ) => {

			let tabId = 'tab-' + tab.getAttribute( 'href' ).slice( 1 );

			// Set ARIA and ID attributes
			tab.setAttribute( 'id', tabId );
			tab.setAttribute( 'aria-selected', false );
			tab.parentNode.setAttribute( 'role', 'presentation' );
			tabContent[index].setAttribute( 'aria-labelledby', tabId );
			tabContent[index].setAttribute( 'aria-hidden', true );

			tab.onclick = tabHandle;

			function tabHandle( event ) {

				event.preventDefault();

				// Handle opening and closing of the tabs on mobile devices
				if ( tab.parentNode.classList.contains( 'is-active' ) ) {
					tab.parentNode.parentNode.classList.toggle( 'm-is-active' );
				} else {
					tab.parentNode.parentNode.classList.remove( 'm-is-active' );
				}

				// Change state of previously selected activeTab item
				activeTab.forEach( ( value, index ) => {

					if ( value.classList.contains( 'is-active' ) ) {
						value.classList.remove( 'is-active' );
						tabLinks[index].setAttribute( 'aria-selected', 'false' );
					}

				} );

				// Set state of newly selected tab list item
				tab.setAttribute( 'aria-selected', 'true' );
				tab.parentNode.classList.add( 'is-active' );

				// Change state of previously selected tabContent item
				tabContent.forEach( value => {

					if ( value.classList.contains( 'is-active' ) ) {
						value.classList.remove( 'is-active' );
						value.setAttribute( 'aria-hidden', 'true' );
					}

				} );

				// Show newly selected content
				tabContent[index].classList.add( 'is-active' );
				tabContent[index].setAttribute( 'aria-hidden', 'false' );

				// Set focus to the first heading in the newly revealed tab content
				if ( tabContent[index].querySelector( 'h2' ) ) {
					tabContent[index].querySelector( 'h2' ).setAttribute( 'tabindex', -1 );
					tabContent[index].querySelector( 'h2' ).focus();
				}

			}

			// Set state for the first .tab-content item
			tabContent[0].classList.add( 'is-active' );
			tabContent[0].setAttribute( 'aria-hidden', 'false' );

		} );

	} );

	// Execute the callback function
	if ( 'function' === typeof callback ) {
		callback.call();
	}

}
