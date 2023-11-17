import React from "react";
import { Cardlist } from "../components";


function User() {
  return <div className="h-[93vh] bg-slate-200 dark:bg-slate-900 p-2">
    <div className="bg-white dark:bg-slate-900 dark:text-gray-300 flex justify-between items-center gap-4 p-5">
      <p className="text-2xl">@abcd</p>
      <p className="text-gray-400">Total blogs: 200</p>
    </div>
    <div className="h-[81.7vh] p-2 overflow-y-auto">
      <Cardlist/>
    </div>
  </div>;
}

export default User;
