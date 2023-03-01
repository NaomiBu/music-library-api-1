const {submitQuery, getInsertId } = require("~root/lib/database");
const fetchArtistById = ({artistID}) => submitQuery`
SELECT * FROM Artists
WHERE artist_id = ${artistID};
`;

module.exports = getInsertId(fetchArtistById);