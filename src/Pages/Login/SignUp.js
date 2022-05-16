import React from 'react';
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useNavigation } from 'react-day-picker';
import useToken from '../../hooks/useToken';
const SignUp = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth, {sendEmailVerification:true});
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
   
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || guser) //user paile useToken hook call hoye sekhane chole jacce
  const navigate = useNavigate();
  let signInerrorMessage;

  if( loading || gloading || updating){
    return <Loading/>
  }

  if(error || gerror || updateError){
    signInerrorMessage = <p className="text-red-500"><small>{error?.message || gerror?.message || updateError?.message}</small></p>
  }

  if (token) {
    // console.log(user || guser);
    navigate('/appointment')
  }
  const onSubmit = async(data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName:data.name });
    console.log('update done')
    // navigate('/appointment')
  };
    return (
        <div className="flex h-screen justify-center items-center mt-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Sign-up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">User name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                      required: {
                          value: true,
                          message: 'Name is Required'
                       }
                
                    })}
                />
                <label className="label">
                {errors.name?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                      required: {
                          value: true,
                          message: 'Email is Required'
                       },
                      pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: 'Provide a valid Email'
                      }
                    })}
                />
                <label className="label">
                {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
              </div>
  
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="type your password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                      required: {
                          value: true,
                          message: 'Password is Required'
                       },
                      minLength: {
                          value: 6,
                          message: 'Must be 6 characters or longer'
                      }
                    })}
                />
                <label className="label">
                {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
              </div>
               {signInerrorMessage}
              <input className="btn w-full max-w-xs text-white" type="submit" value="Signup" />
            </form>
            <p><small>Already have an account<Link className="text-primary " to="/login">Please Login?</Link></small></p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default SignUp;