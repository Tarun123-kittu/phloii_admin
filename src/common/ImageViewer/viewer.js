import React, { useState } from 'react';

const ViewImage = ({ images, visible, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!visible || !images || images.length === 0) return null;

    const showNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const showPreviousImage = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose} 
        >
            <div
                className="w-1/2 h-1/2 bg-white p-4 rounded-lg overflow-hidden shadow-lg flex items-center justify-center relative"
                onClick={(e) => e.stopPropagation()} 
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-gray-700 text-white p-1 rounded-full"
                    aria-label="Close"
                >
                    &#x2715; 
                </button>
                <img
                    src={images[currentIndex]}
                    alt={`Preview ${currentIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                />
                {images.length > 1 && (
                    <>
                        <button
                            onClick={showPreviousImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
                            aria-label="Previous Image"
                        >
                            &#8592; 
                        </button>
                        <button
                            onClick={showNextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
                            aria-label="Next Image"
                        >
                            &#8594;
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ViewImage;
