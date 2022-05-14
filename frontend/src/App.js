import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_APP_KEY;

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(
        `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`
      );
      const data = await res.json();
      setImages([{ ...data, title: word }, ...images]);
      setWord('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteImage = (id) =>
    setImages(images.filter((image) => image.id !== id));

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search handleSubmit={handleSearchSubmit} word={word} setWord={setWord} />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.length > 0
            ? images.map((image, i) => (
                <Col key={i} className="pb-3">
                  <ImageCard image={image} deleteImage={handleDeleteImage} />
                </Col>
              ))
            : 'WELCOME!'}
        </Row>
      </Container>
    </div>
  );
};

export default App;
