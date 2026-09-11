

import { useCart } from '../context/CartContext';

function BestSells() {
    const { addToCart } = useCart();


    const categories = [
        "Any Department",
        "Amazon Devices & Accessories",
        "Electronics",
        "Computers & Accessories",
        "Home & Kitchen",
        "Beauty & Personal Care",
        "Books",
        "Video Games"
    ];

    const bestSellers = [
        {
            rank: 1,
            title: "Echo Dot (5th Gen) | Smart speaker with bigger vibrant sound, helpful routines and Alexa",
            rating: 4.7,
            reviews: 154210,
            price: "49.99",
            image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&auto=format&fit=crop&q=80",
            category: "Electronics"
        },
        {
            rank: 2,
            title: "Fire TV Stick 4K streaming device, more powerful, Wi-Fi 6, free & live TV",
            rating: 4.8,
            reviews: 98114,
            price: "39.99",
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=80",
            category: "Electronics"
        },
        {
            rank: 3,
            title: "Apple AirPods (3rd Generation) with Lightning Charging Case",
            rating: 4.6,
            reviews: 43290,
            price: "139.99",
            image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=80",
            category: "Electronics"
        },
        {
            rank: 4,
            title: "Blink Outdoor 4 (4th Gen) — Wire-free smart security camera, two-year battery life",
            rating: 4.5,
            reviews: 21900,
            price: "79.99",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=80",
            category: "Smart Home"
        },
        {
            rank: 5,
            title: "Stanley Quencher H2.0 FlowState Stainless Steel Vacuum Insulated Tumbler 40oz",
            rating: 4.9,
            reviews: 62450,
            price: "45.00",
            image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=80",
            category: "Kitchen"
        },
        {
            rank: 6,
            title: "Logitech K380 Multi-Device Bluetooth Wireless Keyboard with Easy-Switch",
            rating: 4.7,
            reviews: 18450,
            price: "29.99",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
            category: "Computers"
        }
    ];

    return (
        <div className="bg-[#EAEDED] min-h-screen py-6">
            <div className="max-w-[1500px] mx-auto px-4">
                
                {/* Header Banner */}
                <div className="bg-white p-6 rounded-sm shadow-2xs mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#0F1111]">
                        Amazon Best Sellers
                    </h1>
                    <p className="text-xs text-[#565959] mt-1">
                        Our most popular products based on sales. Updated frequently.
                    </p>

                    {/* Department Pills */}
                    <div className="flex gap-2 overflow-x-auto pt-4 pb-1 scrollbar-none">
                        {categories.map((cat, i) => (
                            <button 
                                key={i}
                                className={`px-3 py-1.5 text-xs rounded-full border whitespace-nowrap cursor-pointer transition-colors ${
                                    i === 0 
                                    ? 'bg-[#131921] text-white border-[#131921] font-semibold' 
                                    : 'bg-white text-[#0F1111] border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Best Sellers Grid with #1, #2... badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {bestSellers.map((item) => (
                        <div 
                            key={item.rank} 
                            className="bg-white rounded-sm p-4 shadow-2xs hover:shadow-md transition-shadow relative flex flex-col justify-between group cursor-pointer"
                        >
                            {/* Rank Ribbon */}
                            <div className="absolute -top-2 -left-2 bg-[#E67A00] text-white font-black text-xs px-2 py-1 rounded-sm shadow-xs flex items-center gap-0.5 z-10">
                                <span>#</span>
                                <span>{item.rank}</span>
                            </div>

                            <div>
                                <div className="h-44 w-full flex items-center justify-center bg-gray-50 mb-3 overflow-hidden rounded-sm">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
                                    />
                                </div>
                                <div className="text-[11px] text-[#007185] uppercase tracking-wider font-semibold mb-1">
                                    {item.category}
                                </div>
                                <h3 className="text-xs text-[#0F1111] line-clamp-3 leading-snug group-hover:text-[#007185] mb-2 font-medium">
                                    {item.title}
                                </h3>
                                <div className="flex items-center text-[11px] text-[#007185] mb-2">
                                    <span className="text-[#FFA41C] mr-1">★★★★☆</span>
                                    <span>({item.reviews.toLocaleString()})</span>
                                </div>
                                <div className="text-lg font-bold text-[#B12704] mb-3">
                                    ${item.price}
                                </div>
                            </div>

                            <button
                                onClick={() => addToCart(item)}
                                className="w-full bg-[#FFD814] hover:bg-[#F7CA00] active:scale-98 border border-[#FCD200] text-[#0F1111] text-xs font-semibold py-1.5 rounded-full text-center shadow-2xs cursor-pointer block transition-all"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BestSells;