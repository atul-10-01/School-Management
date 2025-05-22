import db from '../config/db.js';

export const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Basic validation
  if (
    !name ||
    !address ||
    typeof latitude !== 'number' ||
    typeof longitude !== 'number'
  ) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  const sql = `
    INSERT INTO schools (name, address, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `;

db.query("INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
  [name, address, latitude, longitude],
  (err, results) => {
    if (err) {
      console.error('DB insert error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'School added successfully' });
  });
};
