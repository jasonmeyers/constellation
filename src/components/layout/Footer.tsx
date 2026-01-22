export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Constellation Sonoma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
