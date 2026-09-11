import { Link } from 'react-router-dom';

function Home() {
    const categoryCards = [
        {
            title: "Gaming accessories",
            items: [
                { name: "Headsets", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&auto=format&fit=crop&q=80" },
                { name: "Keyboards", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&auto=format&fit=crop&q=80" },
                { name: "Computer mice", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&auto=format&fit=crop&q=80" },
                { name: "Chairs", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=300&auto=format&fit=crop&q=80" }
            ],
            linkText: "See more in Gaming",
            link: "/allproducts"
        },
        {
            title: "Shop Fashion deals",
            items: [
                { name: "Jeans under $50", image: "https://images.unsplash.com/photo-1542272604-780c96856592?w=300&auto=format&fit=crop&q=80" },
                { name: "Tops under $25", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=300&auto=format&fit=crop&q=80" },
                { name: "Dresses under $30", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&auto=format&fit=crop&q=80" },
                { name: "Shoes under $50", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&auto=format&fit=crop&q=80" }
            ],
            linkText: "See all deals",
            link: "/allproducts"
        },
        {
            title: "Refresh your space",
            items: [
                { name: "Dining", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=300&auto=format&fit=crop&q=80" },
                { name: "Home", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&auto=format&fit=crop&q=80" },
                { name: "Kitchen", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300&auto=format&fit=crop&q=80" },
                { name: "Health & Beauty", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&auto=format&fit=crop&q=80" }
            ],
            linkText: "Discover more in Home",
            link: "/allproducts"
        },
        {
            single: true,
            title: "Up to 40% off | Electronics",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
            name: "Premium wireless noise-canceling headphones & tech gear",
            linkText: "Shop the sale",
            link: "/bestsells"
        }
    ];

    const dealRow = [
        {
            title: "Apple AirPods Pro (2nd Gen)",
            price: "189.99",
            listPrice: "249.00",
            discount: "24% off",
            rating: "4.8",
            reviews: "12,482",
            image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&auto=format&fit=crop&q=80",
            badge: "Limited time deal"
        },
        {
            title: "Smart 4K Ultra HD Fire TV",
            price: "279.99",
            listPrice: "399.99",
            discount: "30% off",
            rating: "4.6",
            reviews: "8,920",
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&auto=format&fit=crop&q=80",
            badge: "Deal of the Day"
        },
        {
            title: "Mechanical RGB Wireless Keyboard",
            price: "69.99",
            listPrice: "99.99",
            discount: "30% off",
            rating: "4.7",
            reviews: "3,411",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&auto=format&fit=crop&q=80",
            badge: "Top Brand"
        },
        {
            title: "Smart Fitness Watch with GPS",
            price: "129.00",
            listPrice: "179.99",
            discount: "28% off",
            rating: "4.5",
            reviews: "25,190",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80",
            badge: "Limited time deal"
        },
        {
            title: "Instant Vortex Air Fryer 6-in-1",
            price: "89.95",
            listPrice: "129.99",
            discount: "31% off",
            rating: "4.9",
            reviews: "44,302",
            image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&auto=format&fit=crop&q=80",
            badge: "#1 Best Seller"
        }
    ];

    return (
        <div className="w-full pb-12">
            {/* Amazon Hero Section */}
            <div className="relative w-full">
                <div className="relative h-[280px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&auto=format&fit=crop&q=85" 
                        alt="Amazon Deals Banner"
                        className="w-full h-full object-cover object-top"
                    />
                    {/* Gradient Fade to Content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#EAEDED]"></div>
                    <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-md max-w-md hidden sm:block">
                        <span className="text-xs uppercase tracking-wider text-[#FEBD69] font-bold">Great Deals Everyday</span>
                        <h1 className="text-xl sm:text-2xl font-bold">Huge savings on top brands and essentials</h1>
                    </div>
                </div>
            </div>

            {/* Main Cards Grid - Pulled up over hero gradient like real Amazon */}
            <div className="max-w-[1480px] mx-auto px-4 -mt-24 sm:-mt-44 lg:-mt-64 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {categoryCards.map((card, idx) => (
                        <div key={idx} className="bg-white p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                            <div>
                                <h2 className="text-[19px] font-bold text-[#0F1111] mb-3 leading-snug">
                                    {card.title}
                                </h2>
                                
                                {card.single ? (
                                    <div className="cursor-pointer group">
                                        <div className="h-[270px] w-full overflow-hidden bg-gray-100 mb-2">
                                            <img 
                                                src={card.image} 
                                                alt={card.name} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <p className="text-xs text-[#0F1111] line-clamp-2 mt-2">{card.name}</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        {card.items.map((item, itemIdx) => (
                                            <div key={itemIdx} className="cursor-pointer group">
                                                <div className="h-[105px] w-full overflow-hidden bg-gray-100 mb-1 rounded-sm">
                                                    <img 
                                                        src={item.image} 
                                                        alt={item.name} 
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <span className="text-[11px] text-[#0F1111] leading-tight block">
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Link 
                                to={card.link} 
                                className="text-[13px] text-[#007185] hover:text-[#C7511F] hover:underline font-medium pt-2 block"
                            >
                                {card.linkText}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Today's Deals Carousel Card */}
                <div className="bg-white p-5 mt-6 shadow-sm">
                    <div className="flex items-baseline justify-between mb-4">
                        <div className="flex items-baseline gap-3">
                            <h2 className="text-xl font-bold text-[#0F1111]">Today's Deals</h2>
                            <Link to="/allproducts" className="text-[13px] text-[#007185] hover:text-[#C7511F] hover:underline">
                                See all deals
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {dealRow.map((product, pIdx) => (
                            <div key={pIdx} className="border border-gray-100 rounded-sm p-3 hover:shadow-sm flex flex-col justify-between group cursor-pointer bg-white">
                                <div>
                                    <div className="h-[180px] w-full flex items-center justify-center overflow-hidden bg-gray-50 mb-3">
                                        <img 
                                            src={product.image} 
                                            alt={product.title} 
                                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="bg-[#CC0C39] text-white font-bold text-[11px] px-1.5 py-0.5 rounded-xs">
                                            {product.discount}
                                        </span>
                                        <span className="text-[#CC0C39] font-bold text-xs">
                                            {product.badge}
                                        </span>
                                    </div>
                                    <div className="flex items-baseline gap-1.5 mb-1">
                                        <span className="text-xs text-[#0F1111] align-top font-normal">$</span>
                                        <span className="text-xl font-bold text-[#0F1111] leading-none">{product.price.split('.')[0]}</span>
                                        <span className="text-xs text-[#0F1111] align-top font-bold">{product.price.split('.')[1]}</span>
                                        <span className="text-xs text-gray-500 line-through ml-1.5">${product.listPrice}</span>
                                    </div>
                                    <h3 className="text-xs text-[#0F1111] line-clamp-2 leading-tight group-hover:text-[#007185]">
                                        {product.title}
                                    </h3>
                                </div>
                                <div className="mt-2 flex items-center text-[11px] text-[#007185]">
                                    <span className="text-[#FFA41C] mr-1">★★★★☆</span>
                                    <span>({product.reviews})</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional 4 Category Highlight Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                    <div className="bg-white p-5 flex flex-col justify-between shadow-sm">
                        <div>
                            <h2 className="text-[19px] font-bold text-[#0F1111] mb-3 leading-snug">Personal Care</h2>
                            <div className="h-[250px] w-full bg-gray-100 overflow-hidden mb-2">
                                <img 
                                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80" 
                                    alt="Personal Care" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <Link to="/allproducts" className="text-[13px] text-[#007185] hover:text-[#C7511F] hover:underline font-medium">Explore health & wellness</Link>
                    </div>

                    <div className="bg-white p-5 flex flex-col justify-between shadow-sm">
                        <div>
                            <h2 className="text-[19px] font-bold text-[#0F1111] mb-3 leading-snug">Laptops & PCs</h2>
                            <div className="h-[250px] w-full bg-gray-100 overflow-hidden mb-2">
                                <img 
                                    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=80" 
                                    alt="Laptops" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <Link to="/allproducts" className="text-[13px] text-[#007185] hover:text-[#C7511F] hover:underline font-medium">Shop computers</Link>
                    </div>

                    <div className="bg-white p-5 flex flex-col justify-between shadow-sm">
                        <div>
                            <h2 className="text-[19px] font-bold text-[#0F1111] mb-3 leading-snug">Kitchen Essentials</h2>
                            <div className="h-[250px] w-full bg-gray-100 overflow-hidden mb-2">
                                <img 
                                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=80" 
                                    alt="Kitchen" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <Link to="/allproducts" className="text-[13px] text-[#007185] hover:text-[#C7511F] hover:underline font-medium">Shop cookware</Link>
                    </div>

                    <div className="bg-white p-5 flex flex-col justify-between shadow-sm">
                        <div>
                            <h2 className="text-[19px] font-bold text-[#0F1111] mb-3 leading-snug">Sign in for the best experience</h2>
                            <div className="py-6 flex flex-col items-center justify-center">
                                <Link 
                                    to="/login"
                                    className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] text-black text-center text-xs font-semibold py-2 rounded-md shadow-xs cursor-pointer block mb-4"
                                >
                                    Sign in securely
                                </Link>
                                <div className="text-xs text-gray-600 text-center">
                                    New customer? <Link to="/login" className="text-[#007185] hover:underline">Start here.</Link>
                                </div>
                            </div>
                            <div className="h-[140px] w-full bg-gray-100 overflow-hidden mt-1">
                                <img 
                                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&auto=format&fit=crop&q=80" 
                                    alt="Prime Experience" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <Link to="/allproducts" className="text-[13px] text-[#007185] hover:text-[#C7511F] hover:underline font-medium">View personalized deals</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;