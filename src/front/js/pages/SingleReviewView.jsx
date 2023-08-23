import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext.js';
import { useParams } from 'react-router-dom';
import FavoriteReview from '../component/FavoriteReview.js';
import Likes from '../component/Likes.js';
import { Link } from 'react-router-dom';

const SingleReviewView = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [offer, setOffer] = useState({})
  const [review, setReview] = useState({})

  function goBack() {
    window.history.back();
  }


  useEffect(() => {
    const loadData = async () => {
      setReview(await actions.getReviewById(params.review_id));
      setOffer(await actions.getOfferById(params.offer_id));
    }
    loadData()
    // console.log("Fetch for all reviews in single review view is working");
  }, []);
  return (
    <div className='content-single-review card-review'>
      <div className='img-single-review'>
        <img src={review?.review_image} alt="" />
      </div>
      <div className='content-title-comment'>
        <div className='title-single-review div-title-review'>
          <h1 className='card-title title-review'>{review?.title}</h1>
        </div>
        <div className='comment-single-review comment-review'>
          <p className='card-text'>{review?.comment_text}</p>
        </div>
        <div className='reviews-buttons'>
          <Link to={`/offer/${review.offer_id}`}>Oferta vinculada a la reseña</Link>
        </div>
        <div className="button-back me-3">
          <span className="go-results" onClick={goBack}> &#10094; Volver</span>
        </div>
      </div>
      <div className="likes card-likes">
        <span className="author-review">
          Publicado por : <span>{review?.user?.username}</span>{" "}
        </span>
        <div className="icons-review d-flex align-items-center justify-content-around">
          <span className="me-3">
            <FavoriteReview reviewId={review.id} />
          </span>
          <Likes reviewId={review.id} />
        </div>
      </div>

    </div>
  )
}

export default SingleReviewView