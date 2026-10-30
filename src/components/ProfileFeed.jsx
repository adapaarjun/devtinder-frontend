const ProfileFeed = ({ item }) => {
  const { firstName, lastName, gender, age, about, skills, photoUrl } = item;

  return (
    <div className="relative w-96 h-168 overflow-hidden rounded-3xl shadow-xl">
      {/* Background image */}
      <img
        src={photoUrl}
        alt={`${firstName} ${lastName}`}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/30 to-black/20" />

      {/* Profile details */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
        <h2 className="text-3xl font-bold">
          {firstName} {lastName}
          {age != null && `, ${age}`}
        </h2>

        {gender && (
          <p className="mt-2 text-base">
            <span className="font-semibold text-gray-300">Gender:</span>{" "}
            <span className="capitalize">{gender}</span>
          </p>
        )}

        {about && (
          <div className="mt-4">
            <h3 className="font-bold text-gray-300">About</h3>
            <p className="mt-1 leading-relaxed">{about}</p>
          </div>
        )}

        {skills && skills.length > 0 && (
          <div className="mt-3 flex flex-col flex-wrap gap-2">
            <h3 className="font-bold text-gray-300">Skills</h3>
            <div className="flex">
                <span className="leading-relaxed">
                  {
                    Array.isArray(skills)?skills.join(", "):(skills||"")
                  }
                </span> 
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileFeed;
