import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

// styles
import icon from "../../assets/signupicon.svg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 400000) {
      setThumbnailError("Image file size must be less than 400kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };

  return (
    <div className="md:px-20 w-full lg:flex lg:pt-1 px-5">
      <form
        className="max-w-lg mx-auto mt-[2px] mb-20 p-10 md:border-2 md:border-solid md:bg-white md:shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold">Create new account</h2>
        {/* <p>begin your blogging journey here</p> */}
        <label>
          <span>email</span>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label htmlFor="">
          <span>password</span>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>username</span>
          <input
            type="text"
            required
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>avatar</span>
          <input type="file" required onChange={handleFileChange} />
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>

        {!isPending && <button className="btn">Sign up</button>}
        {isPending && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
      <div className="pr-24 lg:pr-0 mt-5 lg:mt-0 hidden md:block">
        <div className="illustration">
          <img src={icon} alt="landing" className="" />
        </div>
      </div>
    </div>
  );
}
