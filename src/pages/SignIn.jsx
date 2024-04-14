"use client";

import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiInformationCircle,
  HiCheck,
  HiExclamation,
  HiX,
} from "react-icons/hi";
import { Toast } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please Fill Out All Fields"));
    }

    try {
      dispatch(signInStart());
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (response.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col max-w-3xl gap-20 p-3 mx-auto md:flex-row">
        {/* left */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-5xl font-bold dark:text-white md:text-7xl md:items-center"
          >
            <span className="py-1 pr-5 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
              Kal
            </span>
            SHIELD
          </Link>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* right */}

        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="example@email.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              outline
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="mt-4 text-sm">
            <span>Don't have an account? </span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>

          {errorMessage && (
            <Toast>
              <div className="inline-flex items-center justify-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg shrink-0 dark:bg-orange-700 dark:text-orange-200">
                <HiExclamation className="w-5 h-5" />
              </div>
              <div className="ml-3 text-sm font-normal">{errorMessage}</div>
              <Toast.Toggle />
            </Toast>
          )}
        </div>
      </div>
    </div>
  );
}
