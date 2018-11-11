var {friends} = require("../data/friends")
const router = require("express").Router();
//use module.exports so can grab again

const getMatch = (user) => {
  return friends.map((friend) => {
    const getDiff = (friend, user) => {
      return friend.scores.reduce((acc, cv, i) => Math.abs(cv - user.scores[i]) + acc, 0)
    }
    return ({ ...friend, diff: getDiff(friend, user) })
  }) .sort((a,b)=>a.diff>b.diff)[0]


}
router
  .get("/friends", function (req, res) {
    res.json(friends)
    console.log(friends)
  })
  .post("/friends", function (req, res) {
    // console.log(friends);
    console.log("yellow")
    var userInput = req.body
    const matchedUser = getMatch(userInput);
    friends.push(userInput);
    res.json(matchedUser)

  })
  
module.exports = router;