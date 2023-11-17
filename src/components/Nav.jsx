"use client";
import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Navbar fluid rounded className="rounded-none">
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-gray-300">
            Bloger
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
            </Dropdown.Header>
            <Dropdown.Item><NavLink to="/user/@abcd">My Blogs</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/add">Add new Blog</NavLink></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to="/"
            className="text-lg p-2 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-950 lg:hover:bg-transparent hover:text-blue-600 rounded-lg"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-lg p-2 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-950 lg:hover:bg-transparent hover:text-blue-600 rounded-lg"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg p-2 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-950 lg:hover:bg-transparent hover:text-blue-600 rounded-lg"
          >
            Contact
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav;
