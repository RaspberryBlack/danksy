export const Shape = ({className, fillColor}) => {
  return (
    <div className={`absolute left-0 w-full ${className ?? ""}`}>
      <svg x="0px" y="0px" viewBox="0 0 1920 113.5" fill={fillColor ?? "#ffffff"} className="w-full h-full">
        <path d="M0 113.5 655.2 24l777.3 82.2L1920 12v101.5z"/>
      </svg>
    </div>
  );
};
