const router = require('express').Router();
const path = require('path');
const fs = require("fs");
const notesRoute = require('./notes_route');

const {newNote, deleteNote} = require('../../lib/functionNotes')

router.use(notesRoute);

module.exports = router;

