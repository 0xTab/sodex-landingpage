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
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-brand/90 transition-colors';
  const baseClasses = 'mobile:h-10 mobile:px-6 mobile:py-2 pc:h-12 pc:px-8 pc:py-3 bg-brand rounded-[999px] inline-flex justify-center items-center gap-2';

  return (
    <button
      className={`${disabledClasses} ${baseClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="text-center justify-center text-white mobile:text-base pc:text-lg font-latoRegular">
        {text}
      </div>  
    </button>
  );
};

export default LandingButton;
