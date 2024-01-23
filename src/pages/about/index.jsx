import React, { useState } from "react";

const about = () => {
  const [data, setData] = useState({
    admin:""
  });
  console.log(data);

  const handler = (e) => {
    console.log(data);
    const { name, value } = e.target;
    setData({...data,[name]:value});
  };
  return (
    <div className=" text-lg border">
      <form className="bg-gray-700 py-6 px-4 flex flex-col max-w-[1200px] m-auto gap-4">
        <h1 className="text-5xl uppercase text-white mb-10">Form</h1>
        <input
          className="bg-transparent border-b"
          type="text"
          onChange={(e) => handler(e)}
          name="name1"
          placeholder="name"
        />
        <input
          className="bg-transparent border-b"
          type="text"
          name="Lname"
          onChange={(e)=>handler(e)}
          placeholder="last name"
        />
        <input className="bg-blue-600 rounded-lg py-2 px-4" type="submit" />
      </form>
    </div>
  );
};

export default about;
