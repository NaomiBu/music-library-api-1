const handleAPIError = require("~root/utils/handleAPIError");
const fetchAllArtists = require("~root/actions/users/artists/fetchAllArtists");

const getAllArtists = async (req, res) => {

    try {
        const {artists} = await fetchAllArtists ();
        res.status(201).send({
            artists
        })

    } catch (error) {
        handleAPIError(res, error);
    }
}


module.exports = getAllArtists;
