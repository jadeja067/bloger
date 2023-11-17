"use client";

import { Card } from "flowbite-react";
import { NavLink } from "react-router-dom";

export default function BlogCard({r}) {
  return (
    <NavLink to="/:id" className="min-w-full">
      <Card
        className={`min-w-full dark:bg-gray-900 ${!r && 'rounded-none'} dark:hover:bg-slate-700`}
        horizontal
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order. 
        </p>
      </Card>
    </NavLink>
  );
}
