import React from 'react';

interface ButtonProps {
  text: string;
  variant?: 'brand-default';
  onClick?: () => void;
  disabled?: boolean;
}

const LandingButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
}) => {


  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const baseClasses = 'px-6 py-2 bg-brand-default  rounded-[40px] inline-flex justify-center items-center gap-2';

  return (
    <button
      className={`${disabledClasses} ${baseClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="text-center justify-center text-white text-base font-normal ">
        {text}
      </div>  
    </button>
  );
};

export default LadingButton;
