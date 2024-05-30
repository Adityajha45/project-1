import  express  from "express";
import{
    getUser,
    getUserFriends,
    addRemoveFriends,
}  from "../controllers/users.js";
import { verifToken } from "../middleware/auth.js";

const router = express.Router();

/*read*/
router.get("/:id", verifToken, getUser);
router.get("/:id/friends", verifToken, getUserFriends);

/* UPDATE*/

router.patch("/:id/:friendId", verifToken, addRemoveFriends);

export default router;
