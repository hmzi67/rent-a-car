import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" id='username' placeholder='Username' className='border p-3 rounded-lg focus:outline-none' />
        <input type="email" id='email' placeholder='Email' className='border p-3 rounded-lg focus:outline-none' />
        <input type="password" id='password' placeholder='Password' className='border p-3 rounded-lg focus:outline-none' />
        <button className='bg-slate-700 text-white p-3 uppercase rounded-lg hover:opacity-95 disabled:opacity-80 duration-200'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Signin</span>
        </Link>
      </div>
    </div>
  )
}
