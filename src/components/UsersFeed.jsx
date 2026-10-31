import axios from "axios";
import BASE_URL from "../utils/constants";

export const UsersFeed = ({ item, onRequesthandler }) => {
  const { _id, firstName, lastName, age, photoUrl } = item;

  const onHandleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      if (res.status === 304 || res.status === 200) {
        onRequesthandler(item, userId, status);
      } else {
        alert(res.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="carousel-item w-full shrink-0">
      <div className="card image-full h-156 w-full overflow-hidden rounded-2xl shadow-xl">
        <figure>
          <img
            src={photoUrl}
            alt={`${firstName} ${lastName}`}
            className="h-full w-full object-cover"
          />
        </figure>

        <div className="card-body justify-end text-white">
          <h2 className="card-title text-2xl">
            {firstName} {lastName}
            {age != null && `, ${age}`}
          </h2>

          <div className="mt-4 flex justify-center gap-8">
            <button
              type="button"
              className="btn btn-circle btn-error btn-lg"
              aria-label="Pass"
              onClick={() => onHandleSendRequest("ignored", _id)}
            >
              ✕
            </button>

            <button
              type="button"
              className="btn btn-circle btn-success btn-lg"
              aria-label="Like"
              onClick={() => onHandleSendRequest("interested", _id)}
            >
              ♥
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
