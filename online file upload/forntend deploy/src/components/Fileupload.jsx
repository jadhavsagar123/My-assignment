import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fileuploads } from "../thunk/file";

const Fileupload = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    file: "",
  });
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    setState({ ...state, file: event.target.files[0] });
  };

  const handleInputChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    const formdata = new FormData();
    formdata.append("file", state.file);
    formdata.append("title", state.title);
    formdata.append("description", state.description);
    dispatch(fileuploads(formdata));
  };

  return (
    <div
      className="form-group row col-6 offset-3"
      style={{ marginTop: "50px" }}
    >
      <form>
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="Enter Title"
          onChange={handleInputChange}
        />

        <label for="description">description</label>
        <textarea
          class="form-control"
          id="description"
          name="description"
          rows="3"
          placeholder="Enter Description"
          onChange={handleInputChange}
        ></textarea> <br /><br />

        <label for="file">File -</label>
        <input
          type="file"
          className="form-control-file"
          id="file"
          onChange={handleFileChange}
        /> <br /> <br />

        <button
          type="submit"
          className="btn btn-primary mb-2"
          onClick={handleClick}
        >
          Upload Data
        </button>
      </form>
    </div>
  );
};

export default Fileupload;
