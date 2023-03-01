const fetchArtistById = require("./queries/fetchArtistById");

 const selectArtistById = async ({artistID}) => {
    const artist = await fetchArtistById({artistID}) ;
    return {artist}
    };

  
  module.exports = selectArtistById;