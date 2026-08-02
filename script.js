fetch('links.json')
  .then(res => res.json())
  .then(links => {
    const container = document.querySelector('.links');
    links.forEach(({ label, url }) => {
      const domain = new URL(url).hostname;

      const a = document.createElement('a');
      a.href = url;
      a.className = 'link-btn';
      a.target = '_blank';

      const icon = document.createElement('img');
      icon.src = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
      icon.alt = '';
      icon.className = 'link-icon';

      const text = document.createElement('span');
      text.textContent = label;

      a.appendChild(icon);
      a.appendChild(text);
      container.appendChild(a);
    });
  });
