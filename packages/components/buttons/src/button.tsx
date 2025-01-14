import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label} - test</button>;
};
