import React from 'react';

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-600">Oops! Page not found.</p>
      </div>
    </div>
  );
}

export default NotFoundPage;
