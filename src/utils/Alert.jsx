import { useSelector } from "react-redux";

const Alert = ({ item }) => {
  const loggedInUser = useSelector((store) => store.userStore.userState);
  const loggedInUserfirstName = loggedInUser.firstName;
  const loggedInUserLastName = loggedInUser.lastName;
  const { firstName, lastName, status } = item;
  return (
    <div className="toast toast-top toast-center">
      {status === "interested" ? (
        <div className="alert alert-success">
          <span>
            {`Hey ${loggedInUserfirstName} ${loggedInUserLastName} you shown
            interest in ${firstName} ${lastName}`}
          </span>
        </div>
      ) : (
        <div className="alert alert-error">
          <span>
            {`Hey ${loggedInUserfirstName} ${loggedInUserLastName} you ignored ${firstName} ${lastName}`}
          </span>
        </div>
      )}
    </div>
  );
};

export default Alert;
