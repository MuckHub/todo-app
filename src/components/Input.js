import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export default function Input(props) {
  const borderColor = props.isValid ? 'black' : 'red-500';

  return (
    <>
      {!props.isValid && (
        <p className='text-sm text-red-600' id='email-error'>
          This input cannot be empty.
        </p>
      )}
      <div className='mt-1 relative rounded-md shadow-sm'>
        <input
          type='text'
          onChange={props.onChange}
          className={`shadow-sm focus:ring-${borderColor} focus:border-${borderColor} block w-full sm:text-sm border-${borderColor} rounded-md mb-2`}
          placeholder={props.placeholder}
          value={props.value}
        />
        {!props.isValid && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <ExclamationCircleIcon
              className='h-5 w-5 text-red-500'
              aria-hidden='true'
            />
          </div>
        )}
      </div>
    </>
  );
}
