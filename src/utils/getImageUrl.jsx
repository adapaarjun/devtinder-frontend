
const getImageUrl = (photoUrl) => {
  if (!photoUrl) return null;

  // Keep external image URLs unchanged
  if (
    photoUrl.startsWith("https://") &&
    !photoUrl.includes("localhost:3000")
  ) {
    return photoUrl;
  }

  // Handle backend image URLs
  const imagePath = photoUrl
    .replace("http://localhost:3000", "")
    .replace("/assets/", "/user-assets/");

  return imagePath;
};

export default getImageUrl;
