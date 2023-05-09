import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

const users: User[] = [];

// GET all users
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// GET user by ID
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;

  if (!isValidUUID(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(user);
});

// POST new user
router.post('/', (req, res) => {
  const { username, age, hobbies } = req.body;

  if (!username || !age || !Array.isArray(hobbies)) {
    return res.status(400).json({ message: 'Missing or invalid required fields' });
  }

  const newUser: User = {
    id: uuidv4(),
    username,
    age,
    hobbies,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update) existing user
router.put('/:userId', (req, res) => {
  const userId = req.params.userId;

  if (!isValidUUID(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  const updatedUser = { ...users[userIndex], ...req.body };
  users[userIndex] = updatedUser;

  res.status(200).json(updatedUser);
});

// DELETE user
router.delete('/:userId', (req, res) => {
  const userId = req.params.userId;

  if (!isValidUUID(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(userIndex, 1);
  res.status(204).send();
});

function isValidUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[1-5][0-9a-fA-F]{3}\-[89abAB][0-9a-fA-F]{3}\-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(uuid);
}

export default router;
