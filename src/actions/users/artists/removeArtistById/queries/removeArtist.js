const {submitQuery} = require("~root/lib/database");

const deleteArtist = ({artistID}) => submitQuery`
DELETE FROM Artists
WHERE artist_id = ${artistID};
`;

module.exports = deleteArtist;
