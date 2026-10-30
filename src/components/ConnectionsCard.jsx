import bgImage from "../assets/devtinder.png";

const ConnectionsCard = ({ item }) => {
  const { firstName, lastName, gender, age, about, photoUrl } = item;

  return (
    <div
      className="card card-side shrink-0 rounded-2xl border border-base-300 bg-base-100 bg-cover bg-center p-4 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-5 gap-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <figure className="shrink-0 self-start">
        <img
          className="h-20 w-20 rounded-xl object-cover sm:h-24 sm:w-24"
          alt={`${firstName} ${lastName}`}
          src={photoUrl}
        />
      </figure>

      <div className="card-body min-w-0 gap-2 p-0">
        <h2 className="card-title text-lg font-semibold sm:text-xl">
          {firstName} {lastName}
        </h2>

        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm sm:text-base">
          {age != null && (
            <p>
              <span className="font-bold opacity-60">Age - </span>
              <span className="capitalize opacity-60">{age}</span>
            </p>
          )}

          {gender && (
            <p>
              <span className="font-bold opacity-60">Gender - </span>
              <span className="capitalize opacity-60">{gender}</span>
            </p>
          )}
        </div>

        {about && (
          <div className="mt-1">
            <h3 className="mb-1 text-sm font-bold opacity-60">About</h3>
            <p className="wrap-break-words text-sm leading-relaxed opacity-60 sm:text-base">
              {about}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectionsCard;