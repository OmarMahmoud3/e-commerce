import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <div className="bg-white min-h-[80vh] flex flex-col items-center justify-center py-10 px-4 font-sans">
            {/* Amazon Logo */}
            <Link to="/" className="mb-4">
                <span className="text-3xl font-extrabold tracking-tight text-[#131921] flex items-baseline">
                    amazon<span className="text-xs text-[#FEBD69] font-bold ml-0.5">.eg</span>
                </span>
            </Link>

            {/* Sign-In Card */}
            <div className="w-full max-w-[350px] border border-gray-300 rounded-lg p-6 bg-white shadow-2xs">
                <h1 className="text-3xl font-normal text-[#0F1111] mb-4">
                    Sign in
                </h1>

                <div className="space-y-3">
                    <div>
                        <label className="block text-xs font-bold text-[#0F1111] mb-1">
                            Email or mobile phone number
                        </label>
                        <input 
                            type="text" 
                            className="w-full border border-gray-400 focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/30 rounded-xs px-2.5 py-1.5 text-xs text-[#0F1111] focus:outline-none"
                        />
                    </div>

                    <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] text-[#0F1111] text-xs font-semibold py-1.5 rounded-full shadow-2xs cursor-pointer transition-colors mt-2">
                        Continue
                    </button>
                </div>

                <p className="text-[11px] text-[#565959] mt-4 leading-tight">
                    By continuing, you agree to Amazon's{' '}
                    <a href="#" className="text-[#007185] hover:underline hover:text-[#C7511F]">Conditions of Use</a> and{' '}
                    <a href="#" className="text-[#007185] hover:underline hover:text-[#C7511F]">Privacy Notice</a>.
                </p>

                <div className="mt-5 text-xs">
                    <a href="#" className="text-[#007185] hover:underline hover:text-[#C7511F] flex items-center gap-1">
                        <i className="fa-solid fa-caret-right text-[10px]"></i>
                        <span>Need help?</span>
                    </a>
                </div>
            </div>

            {/* New to Amazon Divider */}
            <div className="w-full max-w-[350px] my-4 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-2 text-xs text-gray-500 font-normal">New to Amazon?</span>
                <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Create Account Button */}
            <button className="w-full max-w-[350px] bg-white hover:bg-gray-50 border border-gray-400 text-[#0F1111] text-xs font-normal py-1.5 rounded-full shadow-2xs cursor-pointer transition-colors">
                Create your Amazon account
            </button>
        </div>
    );
}

export default LogIn;