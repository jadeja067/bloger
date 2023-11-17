import React, { useState } from "react";

function AddBlog() {
  const [title, updateTitle] = useState("");
  return (
    <div className="bg-slate-50 dark:bg-slate-900 lg:h-[92vh] h-[93vh] lg:p-3">
      <div className="h-[90vh] w-[98vw] p-5">
        <div className="flex gap-3 items-center pb-4">
          <p className="text-2xl dark:text-gray-300">Title :</p>
          <input
            type="text"
            value={title}
            placeholder="Title here."
            className="block p-2 border-2 hover:border-black dark:bg-slate-950 dark:text-gray-300 dark:border-gray-300"
            onChange={(e) => updateTitle(e.target.value)}
          ></input>
        </div>
        <textarea placeholder="content here" className="w-full h-[80vh] dark:bg-slate-950 dark:text-gray-300 border-2 px-2 hover:border-black dark:border-gray-300"></textarea>
      </div>
    </div>
  );
}

export default AddBlog;
