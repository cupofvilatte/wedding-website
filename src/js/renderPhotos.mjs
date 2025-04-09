export const renderPhotos = async (containerSelector, jsonPath = '/assets/json/albumData.json') => {
    try {
      const response = await fetch(jsonPath);
      if (!response.ok) throw new Error('Failed to fetch album data');
  
      const text = await response.text();
      // console.log('Album JSON raw response:', text);

      const photos = JSON.parse(text);
      const container = document.querySelector(containerSelector);
  
      photos.forEach(photo => {
        const figure = document.createElement('figure');
        figure.classList.add('album-photo');
  
        const img = document.createElement('img');
        img.src = photo.image;
        img.alt = photo.caption;
        img.loading = 'lazy';
  
        figure.appendChild(img);
        container.appendChild(figure);
      });
    } catch (error) {
      console.error('Error loading album:', error);
    }
  };
  