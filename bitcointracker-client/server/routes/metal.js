const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const schema = require('../store/schema');

// healthcheck
router.get('/health', (req, res) => {
  res.status('200').send("Status: ok!");
});

// retrieve all metals from data store
router.get('/all', (req, res) => {
  const { metal } = req.app.locals;
  metal.getMetals(req.params.id, (err, returnedMetals) => {
    if (err) {
      res.status('400').send({errorMessage: err});
    }
    res.status('200').send(returnedMetals);
  });
});

// retrieve a metal from data store
router.get('/:id', (req, res) => {
  const { metal } = req.app.locals;
  metal.getMetal(req.params.id, (err, returnedMetal) => {
    if (err) {
      res.status('400').send({errorMessage: err});
    }
    res.status('200').send(returnedMetal);
  });
});

// modify existing metal or add a new one to the data store
router.put('/:id', jsonParser, async (req, res) => {
  try {
    const valid = await schema.isValid(req.body);
    if(valid) {
      const { metal } = req.app.locals;
      metal.putMetal(req.params.id, req.body, (err, id) => {
        if (err) {
          res.status('400').send({errorMessage: err});
        }
        res.status('200').send({id: id});
      });
    } else {
      res.status('400').send({errorMessage: 'Invalid request body'});
    }
  } catch(err) {
    res.status('400').send({errorMessage: 'Invalid request body'});
  }
});

// retrieve a metal from data store
router.delete('/:id', (req, res) => {
  const { metal } = req.app.locals;
  metal.deleteMetal(req.params.id, (err, deletedMetalId) => {
    if (err) {
      res.status('400').send({errorMessage: err});
    }
    res.status('200').send(deletedMetalId);
  });
});

module.exports = router;