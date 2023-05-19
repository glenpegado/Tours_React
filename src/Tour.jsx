import { useState } from 'react';

function Tour({ id, image, info, name, price, removeTour }) {
  //state
  let [readMore, setReadMore] = useState(false);

  const expand = () => {
    if (readMore) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  };

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : info.substring(0, 200)}...
          <button className='info-btn' onClick={expand}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button
          type='button'
          onClick={() => removeTour(id)}
          className='btn btn-block delete-btn'
        >
          Not Interested
        </button>
      </div>
    </article>
  );
}
export default Tour;
