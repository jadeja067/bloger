import React from 'react'
import { Cardlist } from "../components";

function Home() {
  return (
    <div className="p-4 h-[93vh] overflow-y-auto bg-slate-100 dark:bg-gray-800">
      <Cardlist px={1} r={1}/>
    </div>
  )
}

export default Home