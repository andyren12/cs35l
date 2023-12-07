const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const UserRoutes = require("./routes/UserRoutes.js");
const MusicRoutes = require("./routes/MusicRoutes.js");

app.use("/user", UserRoutes);
app.use("/music", MusicRoutes);

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
