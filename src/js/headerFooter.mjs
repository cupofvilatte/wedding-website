// injectHeaderFooter.mjs
export const injectLayout = async () => {
    const headerContainer = document.createElement('div');
    const footerContainer = document.createElement('div');
  
    try {
      const headerResponse = await fetch('/wedding-website/components/header.html');
      if (headerResponse.ok) {
        headerContainer.innerHTML = await headerResponse.text();
        document.body.insertAdjacentElement('afterbegin', headerContainer);
      }
  
      const footerResponse = await fetch('/wedding-website/components/footer.html');
      if (footerResponse.ok) {
        footerContainer.innerHTML = await footerResponse.text();
        document.body.insertAdjacentElement('beforeend', footerContainer);
      }
    } catch (err) {
      console.error('Header/Footer injection failed:', err);
    }
  };
  