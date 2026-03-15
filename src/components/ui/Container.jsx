

export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}