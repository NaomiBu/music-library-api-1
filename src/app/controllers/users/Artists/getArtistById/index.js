const handleAPIError = require("~root/utils/handleAPIError");
const selectArtistById = require("~root/actions/users/artists/fetchArtist");

const getArtistById = async (req, res) => {
const {artistID} = req.params; 

    try {
        const {artist} = await selectArtistById ({artistID});
        res.status(201).send({
            artist
        })

    } catch (error) {
        handleAPIError(res, error);
    }
}


module.exports = getArtistById;
