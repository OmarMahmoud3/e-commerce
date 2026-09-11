import { useCart } from '../context/CartContext';

function AllProducts() {
    const { addToCart } = useCart();
    const products = [
        {
            id: 1,
            title: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
            brand: "Sony",
            rating: 4.7,
            reviews: 9412,
            price: 348.00,
            originalPrice: 399.99,
            prime: true,
            delivery: "FREE delivery Tomorrow, 2 PM - 6 PM",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
            badge: "Overall Pick",
            inStock: true
        },
        {
            id: 2,
            title: "Logitech MX Master 3S Wireless Performance Mouse, Quiet Clicks, 8K DPI",
            brand: "Logitech",
            rating: 4.8,
            reviews: 14890,
            price: 99.99,
            originalPrice: 119.99,
            prime: true,
            delivery: "FREE delivery Thursday",
            image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=80",
            badge: "#1 Best Seller",
            inStock: true
        },
        {
            id: 3,
            title: "Kindle Paperwhite (16 GB) – Now with a 6.8\" display and adjustable warm light",
            brand: "Amazon",
            rating: 4.7,
            reviews: 32014,
            price: 149.99,
            originalPrice: 169.99,
            prime: true,
            delivery: "FREE delivery Tomorrow",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80",
            badge: "Amazon's Choice",
            inStock: true
        },
        {
            id: 4,
            title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
            brand: "Fossil",
            rating: 4.6,
            reviews: 6310,
            price: 84.50,
            originalPrice: 140.00,
            prime: true,
            delivery: "FREE delivery Saturday",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
            badge: "Limited time deal",
            inStock: true
        },
        {
            id: 5,
            title: "YETI Rambler 20 oz Stainless Steel Vacuum Insulated Tumbler with MagSlider Lid",
            brand: "YETI",
            rating: 4.9,
            reviews: 58210,
            price: 35.00,
            originalPrice: 38.00,
            prime: true,
            delivery: "FREE delivery Tomorrow",
            image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=80",
            badge: "Popular Pick",
            inStock: true
        },
        {
            id: 6,
            title: "Anker Portable Charger 20,000mAh Power Bank with High-Speed USB-C Power Delivery",
            brand: "Anker",
            rating: 4.6,
            reviews: 41800,
            price: 49.99,
            originalPrice: 65.99,
            prime: true,
            delivery: "FREE delivery Tomorrow",
            image: "https://images.unsplash.com/photo-1609592424364-d92298642a8b?w=500&auto=format&fit=crop&q=80",
            badge: "Amazon's Choice",
            inStock: true
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Results Header Bar */}
            <div className="border-b border-gray-200 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between text-xs text-[#565959] shadow-2xs">
                <div>
                    <span>1-16 of over 20,000 results for </span>
                    <span className="text-[#C45500] font-bold">"featured products"</span>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <label className="text-xs text-[#0F1111]">Sort by:</label>
                    <select className="bg-[#F0F2F2] hover:bg-[#E3E6E6] border border-[#D5D9D9] text-[#0F1111] text-xs rounded-lg px-2.5 py-1.5 focus:ring-1 focus:ring-[#007185] cursor-pointer">
                        <option>Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Avg. Customer Review</option>
                        <option>Newest Arrivals</option>
                    </select>
                </div>
            </div>

            {/* Catalog Body with Amazon Sidebar */}
            <div className="max-w-[1600px] mx-auto px-4 py-4 flex gap-6">
                
                {/* Left Filter Sidebar */}
                <aside className="w-56 shrink-0 hidden md:block text-xs text-[#0F1111] space-y-5">
                    <div>
                        <h3 className="font-bold text-sm mb-2 text-[#0F1111]">Department</h3>
                        <ul className="space-y-1.5 pl-1 text-[#007185]">
                            <li className="cursor-pointer hover:text-[#C7511F]">Electronics</li>
                            <li className="cursor-pointer hover:text-[#C7511F]">Computers & Accessories</li>
                            <li className="cursor-pointer hover:text-[#C7511F]">Home & Kitchen</li>
                            <li className="cursor-pointer hover:text-[#C7511F]">Smart Home</li>
                            <li className="cursor-pointer hover:text-[#C7511F]">Video Games</li>
                        </ul>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="font-bold text-sm mb-2 text-[#0F1111]">Amazon Prime</h3>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" defaultChecked className="rounded text-[#007185] accent-[#007185]" />
                            <span className="font-bold text-[#00A8E1] italic text-sm">prime</span>
                        </label>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="font-bold text-sm mb-2 text-[#0F1111]">Customer Reviews</h3>
                        <div className="space-y-1 text-[#007185]">
                            <div className="flex items-center gap-1 cursor-pointer hover:text-[#C7511F]">
                                <span className="text-[#FFA41C] text-sm">★★★★☆</span>
                                <span>& Up</span>
                            </div>
                            <div className="flex items-center gap-1 cursor-pointer hover:text-[#C7511F]">
                                <span className="text-[#FFA41C] text-sm">★★★☆☆</span>
                                <span>& Up</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="font-bold text-sm mb-2 text-[#0F1111]">Price</h3>
                        <ul className="space-y-1.5 text-[#007185]">
                            <li className="cursor-pointer hover:text-[#C7511F]">Under $25</li>
                            <li className="cursor-pointer hover:text-[#C7511F]">$25 to $50</li>
                            <li className="cursor-pointer hover:text-[#C7511F]">$50 to $100</li>
                            <li className="cursor-pointer hover:text-[#C7511F]">$100 & Above</li>
                        </ul>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="font-bold text-sm mb-2 text-[#0F1111]">Condition</h3>
                        <ul className="space-y-1.5 text-[#007185]">
                            <li className="cursor-pointer hover:text-[#C7511F]">New</li>
                            <li className="cursor-pointer hover:text-[#C7511F]">Renewed</li>
                            <li className="cursor-pointer hover:text-[#C7511F]">Used</li>
                        </ul>
                    </div>
                </aside>

                {/* Products Grid */}
                <main className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {products.map((prod) => (
                            <div 
                                key={prod.id} 
                                className="border border-gray-200 rounded-sm p-4 flex flex-col justify-between hover:shadow-md transition-shadow bg-white relative group"
                            >
                                <div>
                                    {/* Product Image */}
                                    <div className="h-56 w-full flex items-center justify-center bg-gray-50 mb-3 overflow-hidden rounded-sm">
                                        <img 
                                            src={prod.image} 
                                            alt={prod.title} 
                                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
                                        />
                                    </div>

                                    {/* Badge */}
                                    {prod.badge && (
                                        <div className="mb-1.5">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 text-white rounded-xs ${
                                                prod.badge.includes('Choice') ? 'bg-[#232F3E]' : 
                                                prod.badge.includes('Best') ? 'bg-[#E67A00]' : 
                                                prod.badge.includes('Deal') ? 'bg-[#CC0C39]' : 'bg-[#333]'
                                            }`}>
                                                {prod.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h2 className="text-sm font-medium text-[#0F1111] line-clamp-2 hover:text-[#007185] cursor-pointer mb-1 leading-snug">
                                        {prod.title}
                                    </h2>

                                    {/* Brand */}
                                    <div className="text-xs text-gray-500 mb-1">by {prod.brand}</div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1.5 text-xs text-[#007185] mb-2">
                                        <span className="text-[#FFA41C] text-sm">★★★★☆</span>
                                        <span className="text-xs font-normal text-gray-600">{prod.rating}</span>
                                        <span className="hover:text-[#C7511F] cursor-pointer">({prod.reviews.toLocaleString()})</span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-1 mb-1">
                                        <span className="text-xs text-[#0F1111] align-top">$</span>
                                        <span className="text-2xl font-bold text-[#0F1111] leading-none">
                                            {Math.floor(prod.price)}
                                        </span>
                                        <span className="text-xs text-[#0F1111] align-top font-bold">
                                            {(prod.price % 1).toFixed(2).substring(2)}
                                        </span>
                                        {prod.originalPrice && (
                                            <span className="text-xs text-gray-500 line-through ml-2">
                                                List: ${prod.originalPrice.toFixed(2)}
                                            </span>
                                        )}
                                    </div>

                                    {/* Prime & Delivery */}
                                    {prod.prime && (
                                        <div className="flex items-center gap-1 mb-1">
                                            <span className="text-sm font-bold text-[#00A8E1] italic">prime</span>
                                        </div>
                                    )}
                                    <p className="text-xs text-[#565959] leading-tight mb-3">
                                        {prod.delivery}
                                    </p>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={() => addToCart(prod)}
                                    className="w-full bg-[#FFD814] hover:bg-[#F7CA00] active:scale-98 border border-[#FCD200] text-[#0F1111] text-xs font-semibold py-2 px-3 rounded-full text-center shadow-xs cursor-pointer block mt-2 transition-all"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AllProducts;