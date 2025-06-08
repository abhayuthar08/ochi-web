import React, { useEffect, useRef } from 'react';

function Eyes() {
  const eyesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      eyesRef.current.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const pupil = eye.querySelector('.pupil');

        const moveX = Math.cos(angle) * 20;
        const moveY = Math.sin(angle) * 20;

        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const wrapperStyle = {
    height: '100vh',
    width: '100vw',
    background: 'radial-gradient(circle at center, #004d43, #000000)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '80px',
  };

  const eyeStyle = {
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, #28e57e 40%, #159b67 100%)',
    border: '6px solid #ffffff',
    borderRadius: '50%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 40px #0f0',
  };

  const pupilStyle = {
    width: '60px',
    height: '60px',
    backgroundColor: 'black',
    borderRadius: '50%',
    position: 'absolute',
    transition: 'transform 0.1s ease',
  };

  return (
    <div style={wrapperStyle}>
      {[0, 1].map((_, i) => (
        <div
          key={i}
          className="eye"
          style={eyeStyle}
          ref={(el) => (eyesRef.current[i] = el)}
        >
          <div className="pupil" style={pupilStyle}></div>
        </div>
      ))}
    </div>
  );
}

export default Eyes;
