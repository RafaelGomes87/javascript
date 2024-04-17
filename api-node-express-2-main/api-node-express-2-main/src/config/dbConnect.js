import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:admin123@cluster0.geduiwl.mongodb.net/');

let db = mongoose.connection;

export default db;