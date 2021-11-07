const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());

let toDos = [
  { id: 1, taskName: "worker👩‍💻", isCompleted: true },
  { id: 2, taskName: "sleep🛌", isCompleted: true },
  { id: 3, taskName: "play🃏", isCompleted: true },
  { id: 4, taskName: "code💻", isCompleted: false },
  { id: 5, taskName: "eat🍴", isCompleted: false },
  { id: 6, taskName: "reading📖", isCompleted: false },
  { id: 7, taskName: "shower🛁", isCompleted: true },
  { id: 8, taskName: "go supermarket🛒", isCompleted: true },
  { id: 9, taskName: "talk with mom🗣️", isCompleted: true },
];

/////////////////////////////////////////////////GET

app.get("/tasks", (req, res) => {
  res.json(toDos);
});

app.get("/Completed", (req, res) => {
  const Completed = toDos.filter((item) => item.isCompleted);
  res.status(200).json(Completed);
});

app.get("/notComplete", (req, res) => {
  const notCompleted = toDos.filter((item) => !item.isCompleted);
  res.status(200).json(notCompleted);
});

/////////////////////////////////////////////////POST

app.post("/addTask", (req, res) => {
  const { id, taskName, isCompleted } = req.query;
  toDos.push({ id: 10, taskName: "task☑️", isCompleted: false });
  res.status(200).json({ id, taskName, isCompleted });
});

/////////////////////////////////////////////////PUT

app.put("/changeIsCompleted/:id/:isCompleted", (req, res) => {
  const { id, isCompleted } = req.params;
  toDos = toDos.map((item, i) => {
    if (id === i) {
      return { ...item, isCompleted: !isCompleted }; //!item.isCompleted
    } else return item;
  });
  res.status(200).json({ id, taskName, isCompleted });
});

app.put("/changeTaskName/:id/:taskName", (req, res) => {
  const { id, taskName } = req.params;
  toDos = toDos.map((item, i) => {
    if (id === i) {
      return { ...item, taskName: taskName }; //"send Email📧"
    } else return item;
  });
    res.status(200).json({ id, taskName, isCompleted });
});

/////////////////////////////////////////////////DELETE

app.delete("/delTask/:id", (req, res) => {
  const { id } = req.params;
  toDos.splice(id, 1);
  res.json(toDos);
});

app.listen(port, () => {
  console.log("server is running");
});
