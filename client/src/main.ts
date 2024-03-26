import "./style.css";

// Write your code here

// You can delete this 👍
type Response = {
	message: string;
};
fetch("http://localhost:8888?message=hello")
	.then((r) => r.json())
	.then((response: Response) => {
		console.log("server response: ", response?.message);
	})
	.catch((err) => console.error(err));
