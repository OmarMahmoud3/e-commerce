import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
    const { totalCount } = useCart();
    return (
        <header className="sticky top-0 z-50 font-sans">
            {/* Top Main Navigation Bar */}
            <div className="bg-[#131921] text-white flex items-center justify-between px-3 py-1.5 gap-2 md:gap-4 select-none">
                
                {/* Amazon Brand / Logo */}
                <Link 
                    to="/" 
                    className="flex items-center px-2 py-1.5 border border-transparent hover:border-white rounded cursor-pointer transition-colors"
                >
                    <span className="text-2xl font-extrabold tracking-tight text-white flex items-baseline">
                        amazon<span className="text-xs text-[#FEBD69] font-bold ml-0.5">.eg</span>
                    </span>
                </Link>

                {/* Delivery Location */}
                <div className="hidden lg:flex items-center px-2 py-1.5 border border-transparent hover:border-white rounded cursor-pointer transition-colors leading-tight">
                    <i className="fa-solid fa-location-dot text-white text-base mr-2 mt-1"></i>
                    <div className="text-left">
                        <div className="text-[11px] text-[#CCCCCC] font-normal leading-none">Deliver to</div>
                        <div className="text-[13px] font-bold text-white leading-tight">Egypt</div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-3xl flex items-center h-10 rounded-md focus-within:ring-2 focus-within:ring-[#F3A847] overflow-hidden bg-white">
                    <div className="hidden sm:flex items-center justify-center bg-[#E6E6E6] hover:bg-[#D4D4D4] text-[#555] text-xs h-full px-3 border-r border-[#CDCDCD] cursor-pointer transition-colors">
                        <span>All</span>
                        <i className="fa-solid fa-caret-down ml-1.5 text-[10px] text-[#666]"></i>
                    </div>
                    <input 
                        className="w-full h-full px-3 text-sm text-[#0F1111] placeholder:text-gray-500 focus:outline-none bg-transparent" 
                        type="text" 
                        placeholder="Search Amazon" 
                    />
                    <button className="bg-[#FEBD69] hover:bg-[#F3A847] w-12 h-full flex items-center justify-center cursor-pointer transition-colors text-[#131921]">
                        <i className="fa-solid fa-magnifying-glass text-base"></i>
                    </button>
                </div>

                {/* Right Actions / Account & Cart */}
                <div className="flex items-center gap-1 sm:gap-2">
                    {/* Language Selector */}
                    <div className="hidden md:flex items-center gap-1 px-2 py-1.5 border border-transparent hover:border-white rounded cursor-pointer transition-colors">
                        <span className="text-sm">🇪🇬</span>
                        <span className="text-xs font-bold text-white">EN</span>
                        <i className="fa-solid fa-caret-down text-[9px] text-[#A7ACB2]"></i>
                    </div>

                    {/* Account & Sign In */}
                    <Link 
                        to="/login" 
                        className="px-2 py-1.5 border border-transparent hover:border-white rounded cursor-pointer transition-colors text-left leading-tight"
                    >
                        <div className="text-[11px] text-white font-normal leading-none">Hello, sign in</div>
                        <div className="text-[13px] font-bold text-white flex items-center gap-1 leading-tight">
                            <span>Account & Lists</span>
                            <i className="fa-solid fa-caret-down text-[9px] text-[#A7ACB2]"></i>
                        </div>
                    </Link>

                    {/* Returns & Orders */}
                    <Link 
                        to="/allproducts" 
                        className="hidden sm:block px-2 py-1.5 border border-transparent hover:border-white rounded cursor-pointer transition-colors text-left leading-tight"
                    >
                        <div className="text-[11px] text-white font-normal leading-none">Returns</div>
                        <div className="text-[13px] font-bold text-white leading-tight">& Orders</div>
                    </Link>

                    {/* Cart */}
                    <Link 
                        to="/cart" 
                        className="flex items-end px-2 py-1.5 border border-transparent hover:border-white rounded cursor-pointer transition-colors relative"
                    >
                        <div className="relative flex items-center">
                            <i className="fa-solid fa-cart-shopping text-2xl text-white"></i>
                            <span className="absolute -top-1.5 left-3 bg-[#131921] text-[#F08804] font-bold text-sm px-1 rounded-full leading-none">
                                {totalCount}
                            </span>
                        </div>
                        <span className="font-bold text-[13px] text-white hidden sm:inline ml-1 mb-0.5">
                            Cart
                        </span>
                    </Link>
                </div>
            </div>

            {/* Secondary Sub-Navigation Bar */}
            <div className="bg-[#232F3E] text-white flex items-center px-4 py-1 gap-1 text-[13px] overflow-x-auto whitespace-nowrap scrollbar-none select-none">
                <button className="flex items-center gap-1.5 font-bold px-2 py-1.5 border border-transparent hover:border-white rounded cursor-pointer transition-colors mr-1">
                    <i className="fa-solid fa-bars text-sm"></i>
                    <span>All</span>
                </button>
                <Link to="/" className="px-2.5 py-1.5 border border-transparent hover:border-white rounded hover:text-white text-[#DDD] transition-colors">
                    Home
                </Link>
                <Link to="/bestsells" className="px-2.5 py-1.5 border border-transparent hover:border-white rounded hover:text-white text-[#DDD] transition-colors">
                    Best Sellers
                </Link>
                <Link to="/allproducts" className="px-2.5 py-1.5 border border-transparent hover:border-white rounded hover:text-white text-[#DDD] transition-colors">
                    Today's Deals
                </Link>
                <Link to="/allproducts" className="hidden sm:inline-block px-2.5 py-1.5 border border-transparent hover:border-white rounded hover:text-white text-[#DDD] transition-colors">
                    Electronics
                </Link>
                <Link to="/allproducts" className="hidden md:inline-block px-2.5 py-1.5 border border-transparent hover:border-white rounded hover:text-white text-[#DDD] transition-colors">
                    Home & Kitchen
                </Link>
                <Link to="/allproducts" className="hidden lg:inline-block px-2.5 py-1.5 border border-transparent hover:border-white rounded hover:text-white text-[#DDD] transition-colors">
                    Fashion
                </Link>
                <Link to="/allproducts" className="hidden lg:inline-block px-2.5 py-1.5 border border-transparent hover:border-white rounded hover:text-white text-[#DDD] transition-colors">
                    Customer Service
                </Link>
                <Link to="/allproducts" className="hidden xl:inline-block px-2.5 py-1.5 border border-transparent hover:border-white rounded hover:text-white text-[#DDD] transition-colors">
                    Registry & Gift Cards
                </Link>
                <span className="ml-auto hidden md:inline-block font-semibold text-[#FEBD69] text-xs px-2 py-1">
                    Shop Great Deals Now
                </span>
            </div>
        </header>
    );
}

export default Navbar;