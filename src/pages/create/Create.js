import { useState } from "react";
import Select from "react-select";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";
import NavBlog from "../../components/NavBlog";

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
    // <div className="max-w-5xl md:px-20 lg:pt-8 px-5 flex-grow pt-3 pb-5">
    //   <h2 className="text-3xl font-bold tracking-widest ">Create a new blog</h2>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       <span className="md:text-2xl text-xl">Blog title:</span>
    //       <input
    //         type="text"
    //         required
    //         onChange={(e) => setName(e.target.value)}
    //         value={name}
    //       />
    //     </label>
    //     <label>
    //       <span className="md:text-2xl text-xl">Content:</span>
    //       <textarea
    //         type="text"
    //         required
    //         onChange={(e) => setDetails(e.target.value)}
    //         value={details}
    //       ></textarea>
    //     </label>
    //     <label>
    //       <span className="md:text-2xl text-xl">Blog category:</span>
    //       <Select
    //         options={categories}
    //         onChange={(option) => setCategory(option)}
    //       />
    //     </label>

    //     <button className="btn">blog it</button>

    //     {formError && <p className="error">{formError}</p>}
    //   </form>
    // </div>
    <div className="bg-gray-50">
      <NavBlog />

      <div className="w-full min-h-screen max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg lg:mt-0 mt-5">
        <form className="flex flex-col p-3 lg:p-5" onSubmit={handleSubmit}>
          <h1 className="text-lg lg:text-2xl font-semibold mb-5">
            Create a new blog
          </h1>

          <div className="flex flex-col">
            {formError && (
              <div className="text-sm text-red-500">{formError}</div>
            )}

            <label>Blog title:</label>
            <div className="flex items-center gap-x-1">
              {/* <div className="text-3xl">🎙</div> */}
              <input
                type="text"
                placeholder="title"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full bg-gray-200 mb-3 lg:mb-5 mt-2 p-2 lg:p-3 rounded-md border border-gray-200 focus:ring-offset-4 focus:ring-2"
              />
            </div>

            <label>Blog category</label>
            <Select
              options={categories}
              onChange={(option) => setCategory(option)}
              className="w-full bg-gray-200 mb-3 lg:mb-5 mt-2 p-2 lg:p-3 rounded-md border border-gray-200 focus:ring-offset-4 focus:ring-2"
            />

            <label>Content:</label>
            <textarea
              rows="5"
              required
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              className="w-full bg-gray-200 mb-3 lg:mb-5 mt-2 p-2 lg:p-3 rounded-md border border-gray-200 focus:ring-offset-4 focus:ring-2"
            ></textarea>
          </div>
          <div className="flex items-center gap-x-3">
            <button className="bg-lime-600 py-1 px-4 rounded-lg text-white lg:font-semibold">
              blog it
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
