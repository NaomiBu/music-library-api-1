const fetchArtist = require("./queries/fetchArtist");

const fetchAllArtists = async () => {
    const artists = await fetchArtist() ;
    return {artists}
    };

  
  module.exports = fetchAllArtists;