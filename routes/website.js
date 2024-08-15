const express = require('express');
const bodyParser = require('body-parser');
const router =  express.Router();
const app = express();

// Use bodyParser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

const websiteController = require('../controllers/websiteController')
const recaptchaMiddleware = require('../middleware/recaptchaMiddleware')


// Home Page
router.get('/', websiteController.home);

// About Page
router.get('/about', websiteController.about);

// Service page
router.get('/services', websiteController.services);

// Portfolio Page
router.get('/portfolio', websiteController.portfolio)

// Contact page

router.get('/contact', websiteController.contact);
router.post('/contactEmail', recaptchaMiddleware, websiteController.contactEmail);






module.exports = router;