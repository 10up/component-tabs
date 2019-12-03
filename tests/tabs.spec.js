import puppeteer from 'puppeteer';

const APP = 'https://10up.github.io/component-tabs/demo/';
const width = 1440;
const height = 860;

let page;
let browser;

beforeAll( async () => {

	browser = await puppeteer.launch( {
		headless: true,
	} );

	page = await browser.newPage();

	await page.setViewport( {
		width,
		height
	} );

} );

describe( 'Accessibility Tests:: Horizontal Tabs', () => {

	test( 'Right arrow navigation', async () => {

		// Visit the page in headless Chrome
		await page.goto( APP );
		let accessibilityTree;

		const tabsArray = await page.$$eval('.tabs .tab-item a', el => el.map(x => x.getAttribute("role")));
		const tabPanelArray = await page.$$eval('.tabs .tab-content', el => el.map(x => x.getAttribute("role")));

		// check the tab roles
		tabsArray.forEach(function(role) {
			expect(role).toEqual('tab');
		});

		// check the tabPabel; roles
		tabPanelArray.forEach(function(role) {
			expect(role).toEqual('tabpanel');
		});

		// Tab into the UI
		await page.keyboard.press( 'Tab' );

		// Select the second tab
		await page.keyboard.press( 'ArrowRight' );
		accessibilityTree = await page.accessibility.snapshot();

		// Confirm the second tab is selected
		await expect( accessibilityTree.children[1].focused ).toBe( true );
		await expect( accessibilityTree.children[1].selected ).toBe( true );

	} );

	test( 'Left arrow navigation', async () => {

		await page.goto( APP );
		let accessibilityTree;

		// Tab into the UI
		await page.keyboard.press( 'Tab' );

		// Arrow left to select the last item
		await page.keyboard.press( 'ArrowLeft' );
		accessibilityTree = await page.accessibility.snapshot();

		// Confirm the last tab is selected
		await expect( accessibilityTree.children[4].focused ).toBe( true );
		await expect( accessibilityTree.children[4].selected ).toBe( true );

		// Arrow right to select the first item again
		await page.keyboard.press( 'ArrowRight' );
		accessibilityTree = await page.accessibility.snapshot();

		// Confirm that the first item is selected
		await expect( accessibilityTree.children[0].focused ).toBe( true );
		await expect( accessibilityTree.children[0].selected ).toBe( true );


	} );

	test( 'Access content with [tab]', async () => {

		await page.goto( APP );
		let accessibilityTree;

		// Tab into the UI
		await page.keyboard.press( 'Tab' );

		// Enter the content
		await page.keyboard.press( 'Tab' );
		accessibilityTree = await page.accessibility.snapshot();

		// make sure the tab panel is selected
		await expect( accessibilityTree.children[5].focused ).toBe( true );
		await expect( accessibilityTree.children[5].role ).toEqual( 'tabpanel' );

	} );

} );

describe( 'Accessibility Tests:: Vertical Tabs', () => {

	test( 'Down arrow navigation', async () => {

		// Visit the page in headless Chrome
		await page.goto( APP );
		let accessibilityTree;

		const tabsArray = await page.$$eval('.tabs-vertical .tab-item a', el => el.map(x => x.getAttribute("role")));
		const tabPanelArray = await page.$$eval('.tabs-vertical .tab-content', el => el.map(x => x.getAttribute("role")));

		// check the tab roles
		tabsArray.forEach(function(role) {
			expect(role).toEqual('tab');
		});

		// check the tabPabel; roles
		tabPanelArray.forEach(function(role) {
			expect(role).toEqual('tabpanel');
		});

		// Tab into the UI
		await page.keyboard.press( 'Tab' );
		await page.keyboard.press( 'Tab' );
		await page.keyboard.press( 'Tab' );

		// Select the second tab
		await page.keyboard.press( 'ArrowDown' );
		accessibilityTree = await page.accessibility.snapshot();

		// Confirm the second tab is selected
		await expect( accessibilityTree.children[7].focused ).toBe( true );
		await expect( accessibilityTree.children[7].selected ).toBe( true );

	} );

	test( 'Up arrow navigation', async () => {

		await page.goto( APP );
		let accessibilityTree;

		// Tab into the UI
		await page.keyboard.press( 'Tab' );
		await page.keyboard.press( 'Tab' );
		await page.keyboard.press( 'Tab' );

		// Arrow left to select the last item
		await page.keyboard.press( 'ArrowUp' );
		accessibilityTree = await page.accessibility.snapshot();

		// Confirm the last tab is selected
		await expect( accessibilityTree.children[10].focused ).toBe( true );
		await expect( accessibilityTree.children[10].selected ).toBe( true );

		// Arrow right to select the first item again
		await page.keyboard.press( 'ArrowDown' );
		accessibilityTree = await page.accessibility.snapshot();

		// Confirm that the first item is selected
		await expect( accessibilityTree.children[6].focused ).toBe( true );
		await expect( accessibilityTree.children[6].selected ).toBe( true );


	} );

	test( 'Access content with [tab]', async () => {

		await page.goto( APP );
		const tabsInstance = '.tabs-vertical';

		let accessibilityTree;

		// Tab into the UI
		await page.keyboard.press( 'Tab' );
		await page.keyboard.press( 'Tab' );
		await page.keyboard.press( 'Tab' );

		// Enter the content
		await page.keyboard.press( 'Tab' );
		accessibilityTree = await page.accessibility.snapshot();

		// make sure the tab panel is selected
		await expect( accessibilityTree.children[11].focused ).toBe( true );
		await expect( accessibilityTree.children[11].role ).toEqual( 'tabpanel' );

	} );

} );

afterAll( () => {
	browser.close();
} );
