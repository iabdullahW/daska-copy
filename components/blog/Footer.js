// components/Footer.js

import Link from 'next/link';
import { FaApple, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="bg-[#16031F] text-white py-12">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-start justify-between md:flex-row">
                    {/* Left Section */}
                    <div className="w-full pr-16 mb-8 border-r border-gray-600 md:mb-0 md:w-1/2">
                        <Link href="/" passHref>
                            <span className="text-5xl font-extrabold cursor-pointer">
                                billic.
                            </span>
                        </Link>
                        <p className="mt-16 font-semibold tracking-wide">Download app for FREE</p>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="flex items-center bg-[#16031F] p-2 rounded-lg text-white hover:bg-[#6c3f8c] border border-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
                                <FaApple className="text-2xl" />
                                <span className="ml-2">App Store</span>
                            </a>
                            <a href="#" className="flex items-center bg-[#16031F] p-2 rounded-lg text-white hover:bg-[#6c3f8c] border border-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
                                <IoLogoGooglePlaystore className="text-2xl" />
                                <span className="ml-2">Google Play</span>
                            </a>
                        </div>
                        <p className="mt-8 text-xs">*Currently available in the U.S. and Canada</p>
                    </div>

                    {/* Touch Section and Links */}
                    <div className="flex flex-col items-center w-full md:w-1/2 md:pl-16 md:items-start">
                        <div className="text-center md:text-left">
                            <p className="flex items-center mb-8 space-x-2 text-lg font-semibold group">
                                <span className="animate-bounce">👋</span>
                                <span>We would like to be in touch.</span>
                                <span className="transition-transform transform group-hover:translate-x-1">→</span>
                            </p>
                        </div>
                        
                        <div className="flex flex-col justify-between w-full md:flex-row">
                            {/* Discover */}
                            <div className="w-full mb-8 md:mb-0 md:mr-8 md:w-auto">
                                <h4 className="mb-2 text-lg font-semibold">Discover</h4>
                                <ul>
                                    <li><Link href="#" className="hover:underline">Contact</Link></li>
                                    <li><Link href="#" className="hover:underline">Portfolio</Link></li>
                                    <li><Link href="#" className="hover:underline">Blog</Link></li>
                                    <li><Link href="#" className="hover:underline">Our team</Link></li>
                                </ul>
                            </div>
                            {/* Learn */}
                            <div className="w-full mb-8 md:mb-0 md:mr-8 md:w-auto">
                                <h4 className="mb-2 text-lg font-semibold">Learn</h4>
                                <ul>
                                    <li><Link href="#" className="hover:underline">Blog</Link></li>
                                    <li><Link href="#" className="hover:underline">Get in Touch</Link></li>
                                    <li><Link href="#" className="hover:underline">FAQ</Link></li>
                                    <li><Link href="#" className="hover:underline">Latest news</Link></li>
                                </ul>
                            </div>
                            {/* Products */}
                            <div className="w-full mb-8 md:mb-0 md:mr-8 md:w-auto">
                                <h4 className="mb-2 text-lg font-semibold">Products</h4>
                                <ul>
                                    <li><Link href="#" className="hover:underline">Shop</Link></li>
                                    <li><Link href="#" className="hover:underline">Pricing</Link></li>
                                    <li><Link href="#" className="hover:underline">Blog</Link></li>
                                    <li><Link href="#" className="hover:underline">Landing</Link></li>
                                </ul>
                            </div>
                            {/* Company */}
                            <div className="w-full md:w-auto">
                                <h4 className="mb-2 text-lg font-semibold">Company</h4>
                                <ul>
                                    <li><Link href="#" className="hover:underline">About us</Link></li>
                                    <li><Link href="#" className="hover:underline">Contact</Link></li>
                                    <li><Link href="#" className="hover:underline">Reviews</Link></li>
                                    <li><Link href="#" className="hover:underline">Services</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-t border-gray-600" />

                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <p className="mb-4 text-gray-400 md:mb-0">&copy; 2024 Billic. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 transition duration-300 ease-in-out transform hover:text-white hover:scale-110">
                            <AiFillInstagram className="text-2xl" />
                        </a>
                        <a href="#" className="text-gray-400 transition duration-300 ease-in-out transform hover:text-white hover:scale-110">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="#" className="text-gray-400 transition duration-300 ease-in-out transform hover:text-white hover:scale-110">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="#" className="text-gray-400 transition duration-300 ease-in-out transform hover:text-white hover:scale-110">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="#" className="text-gray-400 transition duration-300 ease-in-out transform hover:text-white hover:scale-110">
                            <BsYoutube className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;