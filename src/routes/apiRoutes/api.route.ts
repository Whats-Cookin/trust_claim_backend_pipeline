import { Router } from "express";
import { claimPostValidator } from "../../middlewares/validators";
import { claimPostNormalizer } from "../../middlewares/normalizers";
import { claimPost, claimGet, claimsGet, nodesGet } from "../../controllers";
import { jwtVerify } from "../../middlewares";
import { getNodeForLoggedInUser } from "../../controllers/api.controller";


const router = Router();

router.post("/claim", jwtVerify, claimPostNormalizer, claimPostValidator, claimPost);
router.get("/claim/:claimId?", claimGet);
router.get("/claimsfeed", claimsGet);
router.get("/node/:nodeId?", nodesGet);
router.get("/my-node", getNodeForLoggedInUser);


export default router;
