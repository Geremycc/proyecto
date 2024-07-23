let notes = []; 

export default (req, res) => {
  if (req.method === 'POST') {
    const { note } = req.body;
    if (note) {
      notes.push(note);
    }
    res.status(200).json({ notes });
  } else if (req.method === 'DELETE') {
    notes.pop(); 
    res.status(200).json({ notes });
  } else {
    res.status(200).json({ notes });
  }
};
