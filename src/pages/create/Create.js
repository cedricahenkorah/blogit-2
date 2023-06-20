import { useState } from "react";
import Select from "react-select";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

const categories = [
  { value: "lifestyle", label: "Lifestyle" },
  { value: "business", label: "Business" },
  { value: "technology", label: "Technology" },
  { value: "news", label: "News" },
  { value: "education", label: "Education" },
  { value: "entertainment", label: "Entertainment" },
  { value: "sports", label: "Sports" },
];

export default function Create() {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("blogs");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a project category");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const blog = {
      name,
      details,
      category: category.value,
      comments: [],
      createdBy,
      createdAt: timestamp.fromDate(new Date()),
    };

    await addDocument(blog);

    if (!response.error) {
      navigate("/feed");
    }
  };

  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [formError, setFormError] = useState(null);

  return (
    <div className="max-w-5xl md:px-20 lg:pt-8 px-5 flex-grow pt-3 pb-5">
      <h2 className="text-3xl font-bold tracking-widest ">Create a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span className="md:text-2xl text-xl">Blog title:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span className="md:text-2xl text-xl">Content:</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span className="md:text-2xl text-xl">Blog category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>

        <button className="btn">blog it</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
