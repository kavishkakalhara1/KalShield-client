import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col max-w-3xl gap-20 p-3 mx-auto md:flex-row">
        {/* left */}
        <div className="flex-1">
        <Link to="/" className='text-5xl font-bold dark:text-white md:text-7xl md:items-center'>
            <span className='py-1 pr-5 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text'>Kal</span>
            SHIELD
        </Link>
        <p className="mt-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        </div>

        {/* right */}

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput type="text" placeholder="Username" required id="username"/>
            </div>
            <div>
              <Label value="Email" />
              <TextInput type="email" placeholder="example@email.com" required id="email"/>
            </div>
            <div>
              <Label value="Password" />
              <TextInput type="password" placeholder="Password" required id="password"/>
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit" outline >
              Sign Up</Button>
          </form>
          <div className="mt-4 text-sm">
            <span>Already have an account? </span>
            <Link to="/sign-in" className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
