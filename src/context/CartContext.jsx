import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const saved = localStorage.getItem('amazon_cart_items');
            if (saved) return JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load cart from localStorage:', e);
        }
        // Default items matching initial cart state
        return [
            {
                id: 1,
                title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds with USB-C Charging Case",
                price: 189.99,
                color: "White",
                stock: "In Stock",
                prime: true,
                qty: 1,
                image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=300&auto=format&fit=crop&q=80"
            },
            {
                id: 2,
                title: "Logitech MX Master 3S Wireless Performance Mouse with Quiet Clicks",
                price: 99.99,
                color: "Space Gray",
                stock: "In Stock",
                prime: true,
                qty: 1,
                image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&auto=format&fit=crop&q=80"
            },
            {
                id: 3,
                title: "Stanley Quencher H2.0 FlowState Tumbler 40oz Stainless Steel",
                price: 45.00,
                color: "Eucalyptus Green",
                stock: "In Stock",
                prime: true,
                qty: 1,
                image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=300&auto=format&fit=crop&q=80"
            }
        ];
    });

    useEffect(() => {
        try {
            localStorage.setItem('amazon_cart_items', JSON.stringify(cartItems));
        } catch (e) {
            console.error('Failed to save cart to localStorage:', e);
        }
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingIndex = prevItems.findIndex(item => item.id === product.id);
            if (existingIndex > -1) {
                return prevItems.map((item, index) =>
                    index === existingIndex
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }
            return [
                ...prevItems,
                {
                    id: product.id || Date.now(),
                    title: product.title,
                    price: typeof product.price === 'string' ? parseFloat(product.price) : product.price,
                    image: product.image,
                    color: product.color || 'Standard',
                    stock: 'In Stock',
                    prime: product.prime ?? true,
                    qty: 1
                }
            ];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, qty) => {
        if (qty <= 0) {
            removeFromCart(id);
            return;
        }
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, qty } : item
            )
        );
    };

    const totalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                totalCount,
                subtotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
