const deleteArtist = require("./queries/removeArtist");

const removeArtistById = async ({artistID}) => {
  const artist = await deleteArtist({artistID});
  return { artist };
};

module.exports = removeArtistById;
