import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const contact = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [user, setUser] = useState([]);
  // creating data ----------------------------------------------------------

  function inputhandler(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  async function formhandler(e) {
    e.preventDefault();
    const req = await axios.post("/api/hello", data);
    console.log(req);
    if (req.data.success == true) {
      setData({
        username: "",
        password: "",
        email: "",
      });
      toast.success("User is registered");
    } else {
      toast.error("error");
    }
  }
  // creating data ----------------------------------------------------------
  // Retriving data ----------------------------------------------------------
  async function getdata() {
    const data = await axios.get("/api/hello");
    setUser(data?.data?.message);
  }
  useEffect(() => {
    getdata();
  }, [data]);

  // Retriving data ----------------------------------------------------------
  // Deleting data ----------------------------------------------------------
  async function del(id) {
    const deleting = await axios.delete(`/api/hello?id=${id}`);
    if (deleting.data.success == true) {
      toast.success("User is Deleted");
      getdata();
    }
  }
  // Deleting data ----------------------------------------------------------

  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <Toaster />
      <div className="flex">
        <div className="max-w-[400px] py-10 m-auto">
          <form onSubmit={formhandler} className="form ">
            <p id="heading">Register</p>
            <div className="field">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input
                autocomplete="off"
                name="username"
                onChange={inputhandler}
                placeholder="Username"
                value={data.username}
                className="input-field"
                type="text"
              />
            </div>
            <div className="field">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </svg>
              <input
                name="email"
                onChange={inputhandler}
                placeholder="email"
                value={data.email}
                className="input-field"
                type="text"
              />
            </div>
            <div className="field">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </svg>
              <input
                name="password"
                onChange={inputhandler}
                placeholder="Password"
                value={data.password}
                className="input-field"
                type="password"
              />
            </div>
            <div className="btn py-6">
              <button className="button2">Sign Up</button>
            </div>
          </form>
        </div>
        <div className="py-10">
          <div className="flex mx-auto w-full items-center justify-center">
            <ul className="grid grid-cols-3 gap-6  w-full  p-4">
              {user?.map((v, i) => (
                <li key={i} className="border-gray-400 flex flex-row mb-2">
                  <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                      ?
                    </div>
                    <div className="flex-1 pl-1 mr-16">
                      <div className="font-medium">{v.username}</div>
                      <div className="text-gray-600 text-sm">{v.email}</div>
                    </div>
                    <div
                      onClick={() => del(v._id)}
                      className="text-gray-600 text-xs"
                    >
                      <img className="h-5 w-5" src={"/del.svg"} alt="" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
