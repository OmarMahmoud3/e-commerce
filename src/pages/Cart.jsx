import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
    const { cartItems, removeFromCart, updateQuantity, subtotal, addToCart } = useCart();

    return (
        <div className="bg-[#EAEDED] min-h-screen py-6">
            <div className="max-w-[1500px] mx-auto px-4 flex flex-col lg:flex-row gap-5">
                
                {/* Main Cart Items Column */}
                <div className="flex-1 bg-white p-6 rounded-sm shadow-2xs">
                    
                    {/* Free Shipping Alert */}
                    <div className="flex items-center gap-2 text-xs text-[#007600] font-medium border-b border-gray-200 pb-4 mb-4">
                        <i className="fa-solid fa-circle-check text-sm text-[#067D62]"></i>
                        <span>Your order qualifies for <strong>FREE Shipping</strong>. Choose this option at checkout.</span>
                    </div>

                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-2">
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#0F1111]">
                            Shopping Cart
                        </h1>
                        <span className="text-xs text-gray-500">Price</span>
                    </div>

                    {/* Cart Items List */}
                    {cartItems.length === 0 ? (
                        <div className="py-12 text-center">
                            <h2 className="text-xl font-bold text-[#0F1111] mb-2">Your Amazon Cart is empty.</h2>
                            <p className="text-sm text-gray-500 mb-4">Check your saved items or explore today's deals.</p>
                            <Link to="/allproducts" className="inline-block bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] font-semibold text-xs py-2 px-6 rounded-full shadow-xs">
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-200">
                            {cartItems.map((item) => (
                                <div key={item.id} className="py-4 flex flex-col sm:flex-row gap-4 justify-between">
                                    <div className="flex gap-4">
                                        <div className="w-28 h-28 shrink-0 bg-gray-50 flex items-center justify-center p-1 rounded-sm overflow-hidden">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="space-y-1">
                                            <h2 className="text-sm sm:text-base font-medium text-[#0F1111] line-clamp-2 hover:text-[#007185] cursor-pointer">
                                                {item.title}
                                            </h2>
                                            <div className="text-xs text-[#007600] font-medium">{item.stock}</div>
                                            <div className="text-xs text-gray-500">Color: {item.color}</div>
                                            {item.prime && (
                                                <div className="flex items-center gap-1">
                                                    <span className="text-sm font-bold text-[#00A8E1] italic">prime</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-1 text-xs text-gray-600 pt-1">
                                                <input type="checkbox" className="rounded text-[#007185] accent-[#007185]" />
                                                <span>This is a gift <span className="text-[#007185] cursor-pointer hover:underline">Learn more</span></span>
                                            </div>

                                            {/* Quantity & Actions Bar */}
                                            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#007185]">
                                                <div className="flex items-center bg-[#F0F2F2] border border-[#D5D9D9] rounded-md px-2 py-0.5 text-black">
                                                    <span className="text-xs mr-1 text-gray-600">Qty:</span>
                                                    <select 
                                                        value={item.qty} 
                                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                        className="bg-transparent font-medium focus:outline-none cursor-pointer"
                                                    >
                                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                                            <option key={n} value={n}>{n}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <span className="text-gray-300">|</span>
                                                <button 
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="hover:underline cursor-pointer text-[#007185]"
                                                >
                                                    Delete
                                                </button>
                                                <span className="text-gray-300">|</span>
                                                <button className="hover:underline cursor-pointer">Save for later</button>
                                                <span className="text-gray-300">|</span>
                                                <button className="hover:underline cursor-pointer">Compare with similar items</button>
                                                <span className="text-gray-300">|</span>
                                                <button className="hover:underline cursor-pointer">Share</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-right shrink-0">
                                        <span className="text-lg font-bold text-[#0F1111]">
                                            ${(item.price * item.qty).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="text-right pt-4 border-t border-gray-200">
                        <span className="text-base text-[#0F1111]">
                            Subtotal ({cartItems.length} items): <strong className="text-lg">${subtotal.toFixed(2)}</strong>
                        </span>
                    </div>
                </div>

                {/* Right Column: Checkout Box & Suggestions */}
                <div className="w-full lg:w-80 shrink-0 space-y-4">
                    <div className="bg-white p-5 rounded-sm shadow-2xs">
                        <div className="flex items-center gap-1.5 text-xs text-[#007600] mb-3">
                            <i className="fa-solid fa-circle-check text-sm text-[#067D62]"></i>
                            <span>Part of your order qualifies for FREE Delivery.</span>
                        </div>

                        <div className="text-base text-[#0F1111] mb-4">
                            Subtotal ({cartItems.length} items): <strong className="text-lg">${subtotal.toFixed(2)}</strong>
                        </div>

                        <div className="flex items-center gap-2 mb-4 text-xs text-[#0F1111]">
                            <input type="checkbox" className="rounded text-[#007185] accent-[#007185]" />
                            <span>This order contains a gift</span>
                        </div>

                        <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] text-[#0F1111] text-xs font-semibold py-2.5 rounded-full shadow-xs cursor-pointer block text-center transition-colors">
                            Proceed to checkout
                        </button>
                    </div>

                    {/* Sponsored / Recommended Mini-Box */}
                    <div className="bg-white p-4 rounded-sm shadow-2xs">
                        <h3 className="text-xs font-bold text-[#0F1111] mb-2">Customers who bought items in your cart also bought</h3>
                        <div className="flex gap-3 items-center">
                            <div className="w-16 h-16 shrink-0 bg-gray-50 overflow-hidden rounded">
                                <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&auto=format&fit=crop&q=80" alt="Accessory" className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-0.5">
                                <h4 className="text-xs font-medium text-[#007185] line-clamp-2 hover:underline cursor-pointer">
                                    Silicone Protective Case for AirPods Pro 2
                                </h4>
                                <div className="text-xs font-bold text-[#B12704]">$9.99</div>
                                <button 
                                    onClick={() => addToCart({
                                        id: 99,
                                        title: "Silicone Protective Case for AirPods Pro 2",
                                        price: 9.99,
                                        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&auto=format&fit=crop&q=80",
                                        color: "Black",
                                        prime: true
                                    })}
                                    className="bg-[#FFD814] hover:bg-[#F7CA00] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#FCD200] cursor-pointer"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cart;