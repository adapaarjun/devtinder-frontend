import axios from "axios";
import BASE_URL from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useState } from "react";

export const ProfileEditCard = ({ formData, setFormData }) => {
  const [message, setMessage] = useState("");
  const [successType, setSuccessType] = useState("");
  const dispatch = useDispatch();

  const onSaveProfile = async () => {
    try {
      const { firstName, lastName, about, skills, gender, photoUrl, age } =
        formData;
      const payload = {
        firstName,
        lastName,
        age: age === "" || age == null ? null : Number(age),
        about,
        skills: Array.isArray(skills)
          ? skills
          : (skills || "")
              .split(",")
              .map((skill) => skill.trim())
              .filter(Boolean),
        gender,
        photoUrl,
      };
      const res = await axios.patch(BASE_URL + "profile/edit", payload, {
        withCredentials: true,
      });
      dispatch(addUser(res?.data?.data));
      setMessage(res.data.message);
      setSuccessType("success");
      setTimeout(() => {
        setMessage("");
        setSuccessType("");
      }, 3000);
    } catch (err) {
      setMessage(err.response?.data || err.message);
      setSuccessType("error");
      setTimeout(() => {
        setMessage("");
        setSuccessType("");
      }, 3000);
    }
  };

  return (
    <div className="relative isolate w-96 overflow-hidden rounded-2xl shadow-xl">
      <img
        src="../src/assets/devtinder.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-black/30" />
      <div className="relative flex min-h-105 flex-col justify-center gap-6 p-8">
        <label className="floating-label">
          <input
            type="text"
            placeholder="Edit FirstName"
            className="input w-full"
            value={formData.firstName ?? ""}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <span>FirstName</span>
        </label>

        <label className="floating-label">
          <input
            type="text"
            placeholder="Edit LastName"
            className="input w-full"
            value={formData.lastName ?? ""}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          <span>LastName</span>
        </label>

        <label className="floating-label">
          <input
            type="text"
            placeholder="Edit Gender"
            className="input w-full"
            value={formData.gender ?? ""}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
          <span>Gender</span>
        </label>

        <label className="floating-label">
          <input
            type="number"
            placeholder="Edit Age"
            className="input w-full"
            value={formData.age ?? ""}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          <span>Age</span>
        </label>

        <label className="floating-label">
          <input
            type="text"
            placeholder="Edit About"
            className="input w-full"
            value={formData.about ?? ""}
            onChange={(e) =>
              setFormData({ ...formData, about: e.target.value })
            }
          />
          <span>about</span>
        </label>

        <label className="floating-label">
          <input
            type="text"
            placeholder="Edit Skills"
            className="input w-full"
            value={
              Array.isArray(formData.skills)
                ? formData.skills.join(", ")
                : (formData.skills ?? "")
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                skills: e.target.value
              })
            }
          />
          <span>Skills</span>
        </label>

        <label className="floating-label">
          <input
            type="text"
            placeholder="Edit Photo"
            className="input w-full"
            value={formData.photoUrl ?? ""}
            onChange={(e) =>
              setFormData({ ...formData, photoUrl: e.target.value })
            }
          />
          <span>PhotoUrl</span>
        </label>

        {message && (
          <p
            className={
              successType === "success" ? "text-green-500" : "text-red-500"
            }
          >
            {message}
          </p>
        )}

        <div className="flex justify-center pt-2">
          <button className="btn btn-primary" onClick={onSaveProfile}>
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};
