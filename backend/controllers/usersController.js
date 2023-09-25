import { db } from "../db.js"

export const getAllUsers = (req, res) => {
    
    // checking if user exist
    const q = "SELECT * FROM users"

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data);
    })
}
