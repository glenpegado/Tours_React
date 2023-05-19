import { useEffect, useState } from 'react';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

function App() {
  //useState
  let [tour, setTour] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  //FUNCTION Remove Tour
  const removeTour = (id) => {
    let removed = tour.filter((el) => el.id !== id);
    console.log('works');
    setTour(removed);
  };

  //FUNCTION API
  const APIFetch = async () => {
    setIsLoading(true);
    try {
      let res = await fetch(url);
      let data = await res.json();
      setTour(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  //useEffect
  useEffect(() => {
    APIFetch();
  }, []);

  //RETURN
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tour.length == 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <div className='title-underline'></div>
          <button
            type='btn'
            className='btn'
            style={{ marginTop: '2rem' }}
            onClick={() => APIFetch()}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tour} removeTour={removeTour} />
    </main>
  );
}
export default App;
