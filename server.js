const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO
app.get('/musicians/:id', async (req, res) => {
  try {
    const musician = await Musician.findByPk(req.params.id);
    res.json(musician);
  } catch (err) {
    console.error('Error fetching musician', err);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})
