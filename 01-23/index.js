import express from 'express';
import cors from 'cors';
import jwtwebtoken from 'jsonwebtoken';
import mysql from 'mysql2/promise';
import 'dotenv/config';
import bcrypt from 'bcrypt';

const app = express();
app.use(cors());
app.use(express.json()); 

const db = await mysql.createPool({
host: 'localhost',
user : 'root',
password : '',
database : 'auth',
port : 3307,
});
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
const generateToken = (user) => {
    return jwtwebtoken.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '2m' });
    };

    const authenticateToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) return res.sendStatus(401); // Nincs token
    
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) return res.sendStatus(403); // Érvénytelen token
            req.user = user;
            next();
        });
    };

app.post('/login', authenticateToken, async (req, res) => {
    res.json({ message: 'Sikeres bejelentkezés', user: req.user });
}
);

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({ message: 'Username, password, and email are required.' });
    }
    console.log('Registering user:', username, email, password);
    const hashedPassword = await bcrypt.hash(password, 10); // a salt rounds of 10
    try {
      const [result] = await db.execute("INSERT INTO users (username, password, email) VALUES (?, ?, ?)", [username, hashedPassword, email]);
      console.log('User registered with ID:', result.insertId);
      res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (error) {
      res.status(500).json({ message: 'Database error', error: error.message });
    }
    return;
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});