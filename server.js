let express = require('express')
let bodyParser = require('body-parser')
let session = require('express-session')

let app = express()

// definition du moteur qui va etre utilisé
app.set('view engine', 'ejs')

// Middleware
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: 'aaaa',
    resave: false, 
    saveUninitialized: true, 
    cookie: { secure: false } 
    }))
// creation du flash 
app.use(require('./middlewares/flash'))


// Routes 
app.get('/', (request, response) => {
    console.log(request.session)
    response.render('pages/index')
})

app.post('/', (request, response) => { 
    if (request.body.message === undefined || request.body.message === '') {
        request.flash('error', "vous n'avez pas posté de message")
        response.redirect('/')
    } else { 
        
    }
})

app.listen(3500)