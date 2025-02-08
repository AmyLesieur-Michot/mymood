"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
database_1.default.initialize().then(async () => {
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
app_1.default.listen(process.env.PORT, () => {
    console.log('Server listening on 3630');
});
