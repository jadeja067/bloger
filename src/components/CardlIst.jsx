import React from 'react'
import BlogCard from './BlogCard'

function CardlIst({px, r}) {
  return (
    <div className={`${px && 'xl:px-[10vw] lg:px-[5vw]'} flex justify-center items-start gap-2 flex-col`}>
        <BlogCard r={r}/>
        <BlogCard r={r}/>
        <BlogCard r={r}/>
        <BlogCard r={r}/>
        <BlogCard r={r}/>
        <BlogCard r={r}/>
        <BlogCard r={r}/>
    </div>
  )
}

export default CardlIst