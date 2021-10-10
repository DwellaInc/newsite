import React from 'react';

export default function Button({ className, onClick, text, link, type }) {
  if (link) {
    return (
      <a href={link} className={className} target={'_blank'} rel="noreferrer">
        {text}
      </a>
    );
  }
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
}
