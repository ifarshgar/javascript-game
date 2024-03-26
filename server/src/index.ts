import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const port = process.env.PORT ?? "8888";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json({
		message: "Good luck with your task! 🎉",
	});
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
