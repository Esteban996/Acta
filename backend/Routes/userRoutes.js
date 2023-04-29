import express from 'express';

import { getUsers, getUserById, createUser,updateUser, deleteUser, deleteCedula } from '../Controller/userController.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/user/:cedula')
router.post('/create', createUser);
router.put('/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.delete('/delete/:cedula', deleteCedula);

export default router;