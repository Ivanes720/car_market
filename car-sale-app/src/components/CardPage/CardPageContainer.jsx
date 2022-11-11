import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { requestInfo } from "../../Redux/reducerCardPage";
import classes from "./cardPage.module.css";
import CardPage from "../CardPage/CardPage";
import Pagination from "../Pagination/Paginator";
function CardPageContainer({ props }) {
  const dispatch = useDispatch();
  const ids = useSelector((state) => state.cardPage.ids);
  const cards = useSelector((state) => state.cardPage.info);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    ids.map((id) => {
      setLoading(true);
      return dispatch(requestInfo(id));
          });
    setLoading(false);
  }, [ids]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cards.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className={classes.card_block}>
     <Pagination
        postsPerPage={postsPerPage}
        totalPosts={cards.length}
        paginate={paginate}
      />
      {cards === null ? (
        <div>Loading</div>
      ) : (
        <CardPage cards={currentPosts} loading={loading} />
      )}
      
    </div>
  );
}

export default CardPageContainer;
