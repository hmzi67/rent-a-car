import { useSelector } from "react-redux"

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center py-7'>Profile</h1>
      <form className="flex flex-col gap-4">
        <img
        className="h-24 w-24 rounded-full mt-2 self-center object-cover cursor-pointer"
         src={ currentUser.avatar } alt='user image' />
         <input type="text" placeholder="username" className="border p-3 rounded-lg" />
         <input type="email" placeholder="email" className="border p-3 rounded-lg" />
         <input type="password" placeholder="password" className="border p-3 rounded-lg" />
         <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 duration-100 disabled:opacity-80">Update</button>
      </form>
      <div className=" flex justify-between mt-5">
        <span className="cursor-pointer text-red-700">Delete Account</span>
        <span className="cursor-pointer text-red-700">Sign out</span>
      </div>
    </div>
  )
}
