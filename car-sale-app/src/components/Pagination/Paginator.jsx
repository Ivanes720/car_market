import React from "react";
import classes from "./Paginator.module.css";

const Paginator = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.pagination}>
      {pageNumbers.map((number) => (
        <a
          onClick={(event) => {
            event.preventDefault();
            paginate(number);
          }}
          href="!#"
          className="page-link"
        >
          {number}
        </a>
      ))}
    </div>
  );
};

export default Paginator;
{
  /* <nav>
<ul className='pagination'>
  {pageNumbers.map(number => (
    <li key={number} className='page-item'>
      <a onClick={(event) => { event.preventDefault(); paginate(number)}} href='!#' className='page-link'>
        {number}
      </a>
    </li>
  ))}
</ul>
</nav> */
}
