import React from 'react';

const Button = ({ label, onClick, type = 'button', variant = 'primary', className = '', ...props }) => {
  const baseStyles = `px-6 py-2 rounded-lg text-white font-bold transition-all duration-300 ease-in-out`;
  
  const variants = {
    primary: 'bg-transparent hover:bg-hover-color focus:bg-hover-color shadow-button-shadow-btn border border-cyan-600 w-full',
    secondary: 'bg-transparent hover:bg-secondary-hover-color focus:bg-secondary-hover-color shadow-button-shadow border border-cyan-600 w-full',
    danger: 'bg-red-500 hover:bg-red-600 focus:bg-red-600',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
