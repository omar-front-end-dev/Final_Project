import { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";

export const Lazy_Image = ({ src, alt, placeholderSrc }) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    let observer;
    const { current } = imageRef;

    if (current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load the image
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setIsLoaded(true);
              setImageSrc(src);
            };
            img.onerror = () => {
              console.error("Failed to load image:", src);
              // Optionally, you could set a placeholder image or fallback here
            };

            // Stop observing once the image is loaded
            observer.unobserve(current);
          }
        });
      });
      observer.observe(current);
    }

    return () => {
      if (observer && current) {
        observer.unobserve(current);
      }
    };
  }, [src, placeholderSrc]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        style={{
          width: "100%",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />
      {!isLoaded && (
        <img
          src={placeholderSrc}
          alt={alt}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
    </div>
  );
};

Lazy_Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  placeholderSrc: PropTypes.string,
};
