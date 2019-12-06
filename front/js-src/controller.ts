import { c } from './lib/Log';



enum Page {
	welcome, login
}
const App = {
	page:
		  (document.body.classList.contains('welcome')) ? Page.welcome
		: (document.body.classList.contains('login'))   ? Page.login
		: undefined
	,
	/**
	 * Helper function to more cleanly route different page types.
	 */
	onLoad: (p: Page, callback: () => void) => {
		if (p === App.page) {
			document.addEventListener('DOMContentLoaded', () => {
				callback();
			});
		}
	},
};






App.onLoad(Page.welcome, () => {
	c.log(`welcome`);
});
