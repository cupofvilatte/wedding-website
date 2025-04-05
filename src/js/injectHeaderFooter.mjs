// Inject header and footer into each page
export const injectLayout = async () => {
    const headerContainer = document.createElement('div');
    const footerContainer = document.createElement('div');
  
    // Fetch and inject header
    const headerResponse = await fetch('../../components/header.html');
    if (headerResponse.ok) {
      headerContainer.innerHTML = await headerResponse.text();
      document.body.insertAdjacentElement('afterbegin', headerContainer);
    } else {
      console.error('Failed to load header.');
    }
  
    // Fetch and inject footer
    const footerResponse = await fetch('../../components/footer.html');
    if (footerResponse.ok) {
      footerContainer.innerHTML = await footerResponse.text();
      document.body.insertAdjacentElement('beforeend', footerContainer);
    } else {
      console.error('Failed to load footer.');
    }
  };
  