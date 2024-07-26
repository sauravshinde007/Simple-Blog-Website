import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// Array to store posts
let posts = [];

// Setup static css and images
app.use(express.static("public"));

// Use body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { posts: posts });
});

app.post("/submit", (req, res) => {
    const newPost = {
        title: req.body["title"],
        email: req.body["email"],
        content: req.body["content"]
    };

    console.log(newPost);

    // Add the new post to the posts array
    posts.push(newPost);

    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server connected on PORT: ${PORT}`);
});
