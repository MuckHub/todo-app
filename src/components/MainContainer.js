import React from 'react';

export default function MainContainer(props) {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10'>
      <div className='max-w-3xl mx-auto'>{props.children}</div>
    </div>
  );
}
