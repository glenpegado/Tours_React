import Tour from './Tour';

function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((el) => {
          return (
            <div key={el.id}>
              <Tour {...el} removeTour={removeTour} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Tours;
