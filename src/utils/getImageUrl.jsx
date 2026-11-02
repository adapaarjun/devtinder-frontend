const getImageUrl = (photoUrl) => {
    if (!photoUrl) return "";

    return photoUrl
        .replace("http://localhost:3000", "")
        .replace("/assets/", "/user-assets/");
};

export default getImageUrl;