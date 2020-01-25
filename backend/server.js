const express = require('express');
const cors = require('cors');


require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());


//require('./routes/channels.routes.js')(app);
//require('./routes/users.routes.js')(app);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
