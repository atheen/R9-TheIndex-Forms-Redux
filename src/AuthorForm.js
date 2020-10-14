import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { postAuthor, resetErrors } from "./redux/actions/index";

const AuthorForm = (props) => {
  const [author, setAuthor] = useState({
    first_name: "",
    last_name: "",
    imageUrl: "",
    books: [],
  });

  useEffect(() => {
    return () => {
      if (props.errors.length) props.resetErrors();
    };
  }, []); // Component Will unmount

  const textChangeHandler = event => {
    setAuthor({...author,[event.target.name]: event.target.value})
  }

  const submitAuthor = (event) => {
    event.preventDefault();
    props.postAuthor(author, props.closeModal);
  };

  const errors = props.errors;

  return (
    <div className="mt-5 p-2">
      <form onSubmit={submitAuthor}>
        {!!errors.length && (
          <div className="alert alert-danger" role="alert">
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">First Name</span>
          </div>
          <input type="text" className="form-control" name="first_name" onChange={textChangeHandler} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Last Name</span>
          </div>
          <input type="text" className="form-control" name="last_name" onChange={textChangeHandler} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Image URL</span>
          </div>
          <input type="text" className="form-control" name="imageUrl" onChange={textChangeHandler} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errors: state.errorsState.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postAuthor: (newAuthor, closeModal) =>
      dispatch(postAuthor(newAuthor, closeModal)),
    resetErrors: () => dispatch(resetErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorForm);
