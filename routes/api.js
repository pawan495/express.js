const router= require("express").Router();
module.exports={postDb, deleteDb}= require("../server");


router.post("/notes", (req, res) => {
    res.json(postDb(req.body));
 });
 
 router.delete("/notes/:id", (req, res) => {
    res.json(deleteDb(req.params.id));
 });
 
 module.exports = router;

