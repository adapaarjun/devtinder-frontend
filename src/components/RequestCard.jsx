import axios from "axios";
import bgImage from "../assets/devtinder.png";
import BASE_URL from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeRequestUser } from "../utils/requestSlice";

const RequestCard = ({ item }) => {
  const { firstName, lastName, gender, age, about, photoUrl } = item.fromUserId;
  const dispatch = useDispatch();

  const onRequestHandler = async (status, idFromRequest) => {
    try {
      const res = await axios.post(
        BASE_URL + "request/review/" + status + "/" + idFromRequest,
        {},
        { withCredentials: true },
      );
      dispatch(removeRequestUser(idFromRequest));
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
        <div
          className="card card-side bg-base-100 border border-base-300 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-4 sm:p-5 gap-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <figure className="shrink-0 self-start">
            <img
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover"
              alt={`${firstName} ${lastName}`}
              src={photoUrl}
            />
          </figure>

          <div className="card-body p-0 gap-2 min-w-0">
            <h2 className="card-title text-lg sm:text-xl font-semibold">
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
                <h3 className="text-sm font-bold opacity-60 mb-1">About</h3>
                <p className="text-sm sm:text-base  opacity-60 leading-relaxed wrap-break-words">
                  {about}
                </p>
              </div>
            )}

            <div className="mt-4 flex justify-center gap-8">
              <button
                type="button"
                className="btn btn-circle btn-error btn-lg"
                aria-label="Pass"
              >
                ✕
              </button>

              <button
                type="button"
                className="btn btn-circle btn-success btn-lg"
                aria-label="Like"
                onClick={() => onRequestHandler("accepted", item._id)}
              >
                ♥
              </button>
            </div>
          </div>
        </div>
  );
};

export default RequestCard;
