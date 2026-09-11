


import { Link } from 'react-router-dom';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const getToKnowUs = [
        { title: 'Careers', href: '#' },
        { title: 'Blog', href: '#' },
        { title: 'About Amazon', href: '#' },
        { title: 'Investor Relations', href: '#' },
        { title: 'Amazon Devices', href: '#' },
        { title: 'Amazon Science', href: '#' }
    ];

    const makeMoneyWithUs = [
        { title: 'Sell products on Amazon', href: '#' },
        { title: 'Sell on Amazon Business', href: '#' },
        { title: 'Sell apps on Amazon', href: '#' },
        { title: 'Become an Affiliate', href: '#' },
        { title: 'Advertise Your Products', href: '#' },
        { title: 'Self-Publish with Us', href: '#' },
        { title: 'Host an Amazon Hub', href: '#' },
        { title: '› See More Make Money with Us', href: '#' }
    ];

    const amazonPaymentProducts = [
        { title: 'Amazon Business Card', href: '#' },
        { title: 'Shop with Points', href: '#' },
        { title: 'Reload Your Balance', href: '#' },
        { title: 'Amazon Currency Converter', href: '#' }
    ];

    const letUsHelpYou = [
        { title: 'Amazon and COVID-19', href: '#' },
        { title: 'Your Account', href: '#' },
        { title: 'Your Orders', href: '#' },
        { title: 'Shipping Rates & Policies', href: '#' },
        { title: 'Returns & Replacements', href: '#' },
        { title: 'Manage Your Content and Devices', href: '#' },
        { title: 'Help', href: '#' }
    ];

    const amazonServices = [
        { name: 'Amazon Music', desc: 'Stream millions of songs' },
        { name: 'Amazon Ads', desc: 'Reach customers wherever they spend their time' },
        { name: '6pm', desc: 'Score deals on fashion brands' },
        { name: 'AbeBooks', desc: 'Books, art & collectibles' },
        { name: 'ACX', desc: 'Audiobooks Made Easy' },
        { name: 'Sell on Amazon', desc: 'Start a Selling Account' },
        { name: 'Amazon Business', desc: 'Everything For Your Business' },
        { name: 'AmazonGlobal', desc: 'Ship Orders Internationally' },
        { name: 'Home Services', desc: 'Experienced Pros Happiness Guarantee' },
        { name: 'Amazon Web Services', desc: 'Scalable Cloud Computing Services' },
        { name: 'Audible', desc: 'Listen to Books & Original Audio Performances' },
        { name: 'Box Office Mojo', desc: 'Find Movie Box Office Data' },
        { name: 'Goodreads', desc: 'Book reviews & recommendations' },
        { name: 'IMDb', desc: 'Movies, TV & Celebrities' },
        { name: 'IMDbPro', desc: 'Get Info Entertainment Professionals Need' },
        { name: 'Kindle Direct Publishing', desc: 'Indie Digital & Print Publishing Made Easy' },
        { name: 'Prime Video Direct', desc: 'Video Distribution Made Easy' },
        { name: 'Shopbop', desc: 'Designer Fashion Brands' },
        { name: 'Woot!', desc: 'Deals and Shenanigans' },
        { name: 'Zappos', desc: 'Shoes & Clothing' },
        { name: 'Ring', desc: 'Smart Home Security Systems' },
        { name: 'eero WiFi', desc: '4K Video Streaming in Every Room' },
        { name: 'Blink', desc: 'Smart Security for Every Home' },
        { name: 'Neighbors App', desc: 'Real-Time Crime & Safety Alerts' },
        { name: 'PillPack', desc: 'Pharmacy Simplified' }
    ];

    return (
        <footer className="w-full font-sans select-none mt-auto">
            {/* Back to top bar */}
            <button
                onClick={scrollToTop}
                className="w-full bg-[#37475A] hover:bg-[#485769] text-white py-3 text-center text-xs font-semibold tracking-wide transition-colors cursor-pointer block"
            >
                Back to top
            </button>

            {/* Main Links Section */}
            <div className="bg-[#232F3E] text-white py-10 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                    <div>
                        <h3 className="font-bold text-white text-base mb-3">Get to Know Us</h3>
                        <ul className="space-y-2 text-sm text-[#DDD]">
                            {getToKnowUs.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:underline text-gray-300 hover:text-white transition-colors text-xs">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white text-base mb-3">Make Money with Us</h3>
                        <ul className="space-y-2 text-sm text-[#DDD]">
                            {makeMoneyWithUs.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:underline text-gray-300 hover:text-white transition-colors text-xs">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white text-base mb-3">Amazon Payment Products</h3>
                        <ul className="space-y-2 text-sm text-[#DDD]">
                            {amazonPaymentProducts.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:underline text-gray-300 hover:text-white transition-colors text-xs">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white text-base mb-3">Let Us Help You</h3>
                        <ul className="space-y-2 text-sm text-[#DDD]">
                            {letUsHelpYou.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:underline text-gray-300 hover:text-white transition-colors text-xs">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Middle Region: Logo & Preferences */}
            <div className="bg-[#232F3E] text-white py-6 border-t border-[#3a4553] px-4">
                <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
                    <Link to="/" className="text-xl font-bold tracking-tight text-white hover:border hover:border-white px-2 py-1 rounded">
                        amazon
                    </Link>

                    <button className="border border-gray-500 rounded px-3 py-1.5 text-xs text-gray-300 flex items-center gap-2 hover:border-white transition-colors cursor-pointer">
                        <i className="fa-solid fa-globe"></i>
                        <span>English</span>
                    </button>

                    <button className="border border-gray-500 rounded px-3 py-1.5 text-xs text-gray-300 flex items-center gap-2 hover:border-white transition-colors cursor-pointer">
                        <span className="text-gray-400 font-semibold">$</span>
                        <span>USD - U.S. Dollar</span>
                    </button>

                    <button className="border border-gray-500 rounded px-3 py-1.5 text-xs text-gray-300 flex items-center gap-2 hover:border-white transition-colors cursor-pointer">
                        <span>🇪🇬</span>
                        <span>Egypt</span>
                    </button>
                </div>
            </div>

            {/* Sub-footer: Amazon Services Grid */}
            <div className="bg-[#131A22] text-[#DDD] py-8 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-x-4 gap-y-4 text-xs mb-8">
                    {amazonServices.map((service, index) => (
                        <a key={index} href="#" className="group leading-tight hover:underline">
                            <span className="block font-semibold text-[#DDD] group-hover:underline text-[11px]">
                                {service.name}
                            </span>
                            <span className="block text-[#999] group-hover:underline text-[10px] leading-tight">
                                {service.desc}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Legal & Copyright */}
                <div className="text-center text-[11px] text-gray-300 space-y-2">
                    <div className="flex flex-wrap justify-center gap-4 text-gray-300">
                        <a href="#" className="hover:underline">Conditions of Use</a>
                        <a href="#" className="hover:underline">Privacy Notice</a>
                        <a href="#" className="hover:underline">Consumer Health Data Privacy Disclosure</a>
                        <a href="#" className="hover:underline">Your Ads Privacy Choices</a>
                    </div>
                    <div className="text-gray-400">
                        © 1996-2026, Amazon.com, Inc. or its affiliates
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;