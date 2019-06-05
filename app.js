import 'dotenv/config';
import express from 'express';

// express related imports
//other node package imports
console.log('Hello Node.js project.');

console.log(process.env.MY_SECRET);

import models,{ sequelize} from './server/models';

const app = express();


//additional Express stuff: middleware, routes,,

app.get('/',(req,res) =>{
    res.send('Welcome to the article app');
});
app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);


// sequelize.sync().then(() => {
//     app.listen(process.env.PORT,() => {
//         console.log(`Example app listening on port ${port}!`)
//     });
// });