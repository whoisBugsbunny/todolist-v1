const ex = require("express");
const bp = require("body-parser");
const date = require(__dirname + "/datemod.js");
// const res = require("express/lib/response");

const app = ex();
app.use(bp.urlencoded({ extended: true }));
app.use(ex.static("public"));
app.set("view engine", "ejs");

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var items = ["chess", "code for fun", "case study"];
var workitems = ["web developement"];

app.get("/", function(req, res) {
    var day = date.getDate();
    var wmsg = date.weekend("text");
    res.render("list", { listTitle: day, daymsg: wmsg, newitems: items });
});

app.post("/", function(req, res) {
    let newitem = req.body.newItem;
    if (req.body.list == "Work") {
        workitems.push(newitem);
        res.redirect("/work");
    } else {
        items.push(newitem);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", daymsg: "wmsg", newitems: workitems });
})

app.get("/about", function(req, res) {
    res.render("about");
})


app.listen(3000, function() {
    console.log("todolist is in 3000 port running");
})