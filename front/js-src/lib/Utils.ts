
export class Utils {
	private static escapeMap = {
		/// From underscore.js
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#x27;',
		'`': '&#x60;'
	};
	
	/**
	 * Escape a message's content for insertion into html.
	 */
	static escape(s: string): string {
		let x = s;
		for (const [k, v] of Object.entries(this.escapeMap)) {
			x = x.replace(new RegExp(k, 'g'), v);
		}
		return x.replace(/\n/g, '<br>');
	}
	
	/**
	 * Opposite of escape.
	 */
	static unescape(s: string): string {
		let x = s.replace(/<br>/g, '\n');
		for (const [k, v] of Object.entries(this.escapeMap)) {
			x = x.replace(new RegExp(v, 'g'), k);
		}
		return x;
	}
	
	/**
	 * "Real" modulo (always >= 0), not remainder.
	 */
	static mod(a: number, n: number): number {
		return ((a % n) + n) % n;
	}
	
	/**
	 * Noop object with arbitrary number of nested attributes that are also noop.
	 */
	static deepNoop() {
		const noop = new Proxy(() => {}, {
			get: () => noop
		});
		return noop;
	}
	
	/**
	 * Capitalize
	 */
	static capitalize(s: string): string {
		return s.charAt(0).toUpperCase() + s.slice(1);
	}
	
	/**
	 * Returns a promise that will resolve after the specified time
	 * @param ms Number of ms to wait
	 */
	static delay(ms: number): Promise<void> {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(), ms);
		});
	}
	
	/**
	 * Random element from array
	 */
	static randomItem<T>(arr: T[]): T {
		return arr[Math.floor(Math.random()*arr.length)];
	}
}

