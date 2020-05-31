export const filterAndSort = (data, category, quantity) => {
  const filteredResults = data.entries
    .filter(
      (entry) => entry.programType === category && entry.releaseYear >= 2010
    )
    .slice(0, quantity);
  const sortedList = filteredResults.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });

  return sortedList;
};
