// BentoBox.tsx
import React from 'react';

const BentoBox: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <div className="bg-blue-500 p-4 rounded-lg shadow-lg">
                <h2 className="text-white text-lg font-bold">Item 1</h2>
                <p className="text-white">Description for item 1.</p>
            </div>
            <div className="bg-green-500 p-4 rounded-lg shadow-lg">
                <h2 className="text-white text-lg font-bold">Item 2</h2>
                <p className="text-white">Description for item 2.</p>
            </div>
            <div className="bg-red-500 p-4 rounded-lg shadow-lg">
                <h2 className="text-white text-lg font-bold">Item 3</h2>
                <p className="text-white">Description for item 3.</p>
            </div>
            <div className="bg-yellow-500 p-4 rounded-lg shadow-lg">
                <h2 className="text-white text-lg font-bold">Item 4</h2>
                <p className="text-white">Description for item 4.</p>
            </div>
            <div className="bg-purple-500 p-4 rounded-lg shadow-lg">
                <h2 className="text-white text-lg font-bold">Item 5</h2>
                <p className="text-white">Description for item 5.</p>
            </div>
            <div className="bg-pink-500 p-4 rounded-lg shadow-lg">
                <h2 className="text-white text-lg font-bold">Item 6</h2>
                <p className="text-white">Description for item 6.</p>
            </div>
        </div>
    );
};

export default BentoBox;
