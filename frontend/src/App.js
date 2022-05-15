import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(`${API_URL}/new-image?query=${word}`);
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
        {images.length > 0 ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;

<Welcome />;
