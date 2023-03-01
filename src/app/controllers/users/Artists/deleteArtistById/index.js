const handleAPIError = require("~root/utils/handleAPIError");
const removeArtistById = require("~root/actions/users/artists/removeArtistById")

const deleteArtistById  = async (req, res) => {
  const {artistID} = req.params; 
  try {
  const { artist } = await removeArtistById({artistID});
    res.status(201).send({
      artist
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteArtistById;
