const sortByFavorite = (dataArray) => {
  let favoritedItems = dataArray.filter((item) => item.isFavorited);
  let nonSelectedItems = dataArray.filter((item) => !item.isFavorited);

  return [...favoritedItems, ...nonSelectedItems];
};

export default sortByFavorite;
