export const myLoader = (src) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        resolve({
          src: src,
          width: image.width,
          height: image.height
        });
      };
      image.onerror = reject;
    });
  };