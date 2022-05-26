const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
const  MongoClient  = require("mongodb").MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://rafter:CS35LProject!@cluster0.moz1s.mongodb.net/?retryWrites=true&w=majority";

app.set('view engine', 'ejs')

app.listen(3000, function() {
    console.log('listening on 3000')
})


MongoClient.connect(uri, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to database')
        const db = client.db('comments-concerns')
        const commentsCollection = db.collection('comments')



    app.get('/', (req, res) => {
     db.collection('comments').find().toArray()
       .then(results => {
            res.render('index.ejs', { comments: results })
        })
        .catch(error => console.error(error))
         
        })
        
        app.post('/comments', (req,res) => {
             commentsCollection.insertOne(req.body)
              .then(result => {
                 res.redirect('/')
                })
                 .catch(error => console.error(error))
         })

         })
    .catch(error => console.error(error))





/*async function run() {
  try {
    await client.connect();

    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); 
*/
