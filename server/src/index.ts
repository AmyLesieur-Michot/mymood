import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import database from './database';

// Uncomment imports to create admin
import { User } from "./entities/User";
import bcrypt from "bcrypt";

database.initialize().then(async () => {
    console.log('Connected to database!');
      /*  // Uncomment to create admin
    const user = new User();
 
    user.first_name = 'Admin';
    user.last_name = 'Ornis';
    user.email = 'admin@notimail.fr';
    user.password = await bcrypt.hash('123456', 12);
    user.student = false;
    user.supervisor = false;
    user.admin = true;

    await user.save();
*/
    // Admin, 123456
});

app.listen(process.env.PORT, () => {
    console.log('Server listening on 3630');
});