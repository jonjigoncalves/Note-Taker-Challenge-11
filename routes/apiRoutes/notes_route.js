const router = require('express').Router();
const path = require('path');
const fs = require("fs");

const indexRoute = require('./index_route');

const { notePad } = require('../../db/db.json')

const {newNote, deleteNote} = require('../../lib/functionNotes')

// load get  routes for notes.html
router.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
    const save = notePad;
    res.json(save)
});

// load a post route so a user can add notes
router.post('/notes', (req, res)=>{
    req.body.id = JSON.stringify(notePad.length);
    const note = newNote(req.body, notePad);
    res.json(note)
});

// load a post route so a user can remove notes
// router.delete('/notes/:id', (req, res) => {
//     deleteNote(notePad, req.params.id);
//     res.json(notePad);
//  })
router.delete('/notes/:id', (req, res) => {
    const noteIndex = notePad.findIndex((note) => note.id === req.params.id);
    if (noteIndex !== -1) {
      deleteNote(noteIndex, notePad);
      res.json(notePad);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  });
  



 module.exports = router;