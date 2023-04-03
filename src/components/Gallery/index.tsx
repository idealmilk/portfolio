import React from 'react';

import { Projects } from 'data/Projects';

import GalleryItem from './Item';
import './styled';
import { Container } from './styled';

const Gallery = () => {
  // const [activeImage, setActiveImage] = useState(1);

  // const handleUpdateActiveImage = (index: number) => {
  //   setActiveImage(index + 1);
  // };

  return (
    <Container>
      {Projects.map((project, index) => (
        <GalleryItem
          key={index}
          // index={index}
          {...project}
          // updateActiveImage={handleUpdateActiveImage}
        />
      ))}
    </Container>
  );
};

export default Gallery;
