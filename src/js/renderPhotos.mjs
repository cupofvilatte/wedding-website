export const renderPhotos = async (containerSelector) => {
  const baseURL = import.meta.env.BASE_URL;
  // const jsonPath = `${baseURL}json/albumData.json`;
  const jsonPath = `/wedding-website/albumData.json`;

  try {
    const response = await fetch(jsonPath);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

    const photos = await response.json();
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
