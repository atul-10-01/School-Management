import db from '../config/db.js';
import { getDistanceFromLatLonInKm } from "../utils/geoUtils.js";

//addSchool
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


//listSchool
export const listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude)
    return res.status(400).json({ error: "Missing coordinates" });

  const userLat = parseFloat(latitude);
  const userLon = parseFloat(longitude);

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    const sortedSchools = results
      .map((school) => {
        const distance = getDistanceFromLatLonInKm(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        );
        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  });
};

