# 10up Tabs component

The tabs component is based on and extended from work done by the folks over at [Simply Accessible](http://simplyaccessible.com/). It is a stripped down, but still accessible version of UI tabs. They are keyboard accessible and user friendly and are meant to be a starting point for you to use on a project.

## Installation

### NPM
`npm install --save @10up/component-tabs`

### Standalone
Clone this repo and import `tabs.js` and `tabs.css` from the `dist/` directory.

## API

This component accepts two arguments, the selector for the tab container and an object containing optional callbacks.

### Callbacks

- `onCreate`: Called after the tabs are initialized on page load
- `onTabChange`: Called after a tab has been changed

## Usage

### Markup

This is the markup template expected by the component.

```html
<div class="tabs">
	<div class="tab-control">
		<ul class="tab-list" role="tablist">
			<li class="tab-item"><button role="tab" aria-controls="js-tab1">View Tab 1</button></li>
			<li class="tab-item"><button role="tab" aria-controls="js-tab2">View Tab 2</button></li>
		</ul>
	</div>
	<div class="tab-group">
		<div class="tab-content" id="js-tab1" role="tabpanel">
			<h2>Tab 1 Content</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</div>
		<div class="tab-content" id="js-tab2" role="tabpanel">
			<h2>Tab 2 Content</h2>
			<p>In tincidunt tempor risus gravida tincidunt.</p>
		</div>
	</div>
</div>
```

### CSS

The styles can be imported into your existing codebase by using PostCSS imports, or by including the standalone CSS file in your project.

#### PostCSS Imports
`@import '@10up/component-accordion';`

#### Standalone
Include the `tabs.css` file from the `dist/` directory.

### JavaScript

Create a new instance by supplying the selector to use for the tabs and an object containing any necessary callback functions.

#### NPM

```javascript
import tabs from '@10up/component-tabs';

tabs( '.tabs', {
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	onTabChange: function() {
		console.log( 'onTabChange callback' );
	}
} );
```

#### Standalone

Include the `tabs.js` file from the `dist/` directory and access the component from the gobal `TenUp` object.

```javascript
let myTabs = new TenUp.tabs( '.tabs', {
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	onTabChange: function() {
		console.log( 'onTabChange callback' );
	}
} );
```

## Demo

Example implementations can be found in the `demo` directory.
