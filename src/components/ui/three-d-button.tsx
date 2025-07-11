import React from "react";

interface ThreeDButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ThreeDButton: React.FC<ThreeDButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="threed-btn"
      {...props}
    >
      {children}
    </button>
  );
};

export default ThreeDButton; 