import * as express from 'express';
import * as bodyParser from 'body-parser';
import __rootDir from './lib/RootDirFinder';
import * as HbsModule from 'hbs';
const hbs = HbsModule.create();
const app = express();
const PORT = 8000;
const __frontDir = __rootDir+`/front`;

// Express setup
app.set('trust proxy', 'loopback');
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', `${__frontDir}/views`);
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);


const staticHandler = express.static(__frontDir);
const staticHandlerNoHtml: express.RequestHandler = function(req, res, next) {
	if (req.path === '/' || req.path.endsWith('.html') || req.path.endsWith('.hbs')) {
		return next();
	} else {
		return staticHandler(req, res, next);
	}
};
app.get('/favicon.ico', (req, res) => res.sendFile(`${__frontDir}/favicon.ico`));
app.get('/robots.txt',  (req, res) => res.sendFile(`${__frontDir}/robots.txt`));
app.use('/front', staticHandlerNoHtml);
/// ^^ in production, those aren't used b/c we serve static files from nginx.


/**
 * Routes(html)
 */

app.get('/', function(req, res) {
	res.render('welcome', {
		body_classes: `welcome`,
		user: `Elon Musk`,
	});
});



/**
 * Start engine.
 */

(async () => {
	app.listen(PORT, () => {
		console.debug(`Running on http://localhost:${PORT}`);
	});
})();

