const getImageUrl = (photoUrl) => {
  if (!photoUrl) return "";

  return photoUrl.replace(
    "http://localhost:3000",
    ""
  );
};

export default getImageUrl;