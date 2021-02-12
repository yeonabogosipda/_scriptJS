#Usage
const noteManager = new NoteManager({
  el: document.getElementById('your_wrapper_element_id'),
  notes: [
    {
      title: 'sunt aut facere repellat',
      body: 'uia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
    },
    // ...
  ]
});


#Methods
// Add the note at the bottom
noteManager.addNote({
  title: '',
  body: ''
});

// Add the note at the top
noteManager.prependNote({
  title: '',
  body: ''
});

// Remove the first note
noteManager.removeNote(noteManager.notes[0]);

// Update all notes and rerender
noteManager.notes = [...];
noteManager.renderNotes();


#Events
noteManager.onNoteAdd = (note) => {
  console.log("Note added ", note);
};
noteManager.onNoteChange = (note) => {
  console.log("Note changed ", note);
};
noteManager.onNoteRemove = (note) => {
  console.log("Note removed ", note);
};
