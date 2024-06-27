import { Wine } from 'lucide-react';
import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="text-center items-center">
        <h1 className="text-4xl font-bold mb-4 text-yellow-600">Welcome to Our Marketplace</h1>
        <p className="text-gray-800 text-lg text-yellow-700" >Come on, let's drink some wine!</p>
        <div className='flex justify-center items-center mt-8'>
            <Wine />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
