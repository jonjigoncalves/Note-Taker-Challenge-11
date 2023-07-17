const router = require('express').Router();
const path = require('path');
const fs = require("fs");
const { notePad } = require('../db/db.json')



// function  for a new note
function newNote(body, noteArray){
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), 
    // adding null 2 for not excluding anything and 2 for space indentation
    JSON.stringify({ notePad: noteArray }, null, 2))

    
    return note
    };
    

    // function  for removing a note(bonus)
    function deleteNote(index, noteArray) {
        // the splice method can be called to remove elements from our array
        // index would be the position of the note you want to remove
        const deletedNote = noteArray.splice(index, 1);
        fs.writeFileSync(
          path.join(__dirname, '../db/db.json'),
          JSON.stringify({ notePad: noteArray }, null, 2)
        );
      
        return deletedNote;
      }


    // show homepage
    router.get('/', (req, res) => {
      const thoughts = Thought.findAll({
        include:User
      });
      res.render('index', {
        isLoggedIn: req.session.user_id,
         isHome: true
         });
    });

    module.exports = {
        newNote,
        deleteNote
      };