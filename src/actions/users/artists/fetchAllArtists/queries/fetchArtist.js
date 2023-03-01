const {submitQuery, getInsertId } = require("~root/lib/database");
const fetchArtist = () => submitQuery`
SELECT * FROM Artists;
`;

module.exports = fetchArtist;