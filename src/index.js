
const app = require('./server');
require('./database');

const routes = require('./routes/index');


/* routes */
app.use('/api/calculator/',routes);




app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})

