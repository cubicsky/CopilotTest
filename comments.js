// Create web server

// 1. Import Express
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// 2. Create an App
const app = express();
const port = 3000;

// 3. Use Express Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 4. Create a Router
const router = express.Router();

// 5. Define Router Path
router.get('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('./data/comments.json'));
    res.json(comments);
});

router.post('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('./data/comments.json'));
    const newComment = {
        id: comments.length + 1,
        name: req.body.name,
        message: req.body.message,
        created_at: new Date()
    };
    comments.push(newComment);
    fs.writeFileSync('./data/comments.json', JSON.stringify(comments));
    res.json(comments);
});

// 6. Use Router
app.use('/api', router);

// 7. Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});