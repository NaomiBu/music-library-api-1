const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const postArtist = require("./controllers/users/Artists/postArtist");
const patchArtistById = require("./controllers/users/Artists/patchArtistById" );
const getAllArtists = require("./controllers/users/Artists/getAllArtists");
const deleteArtistById = require("./controllers/users/Artists/deleteArtistById");
const getArtistById = require("./controllers/users/Artists/getArtistById")


const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

router.post("/artists", postArtist);

router.patch("/artist/:artistId", patchArtistById);

router.get("/artists", getAllArtists);

router.delete("/artists/:artistID", deleteArtistById);

router.get("/artists/:artistID", getArtistById);
module.exports = router;
