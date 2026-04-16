export default function LegalLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-6 mt-20">
      <div className=" mx-auto rounded-2xl shadow-sm px-6 sm:px-10 pt-4 pb-10">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-degular">
          {title}
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed font-dmsans">
          {children}
        </div>
      </div>
    </div>
  );
}