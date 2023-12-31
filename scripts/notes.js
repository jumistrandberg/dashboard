const notesTextarea = document.getElementById('notes');

// Save notes to local storage
function saveNotes() {
  const notesContent = notesTextarea.value;
  localStorage.setItem('savedNotes', notesContent);
}

// Display saved notes on load
window.addEventListener('load', () => {
  const savedNotes = localStorage.getItem('savedNotes');
  if (savedNotes) {
    notesTextarea.value = savedNotes;
  }
});

// Save notes when the textarea content changes
notesTextarea.addEventListener('input', saveNotes);