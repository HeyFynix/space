import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

const MobileBottomNavbar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="md:hidden fixed bottom-0 w-full px-6 pb-3 z-50"
        >
            <nav className="bg-black bg-opacity-90 text-white rounded-xl shadow-lg px-2 py-3 flex justify-between items-center">
                {navItems.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="flex-1 text-center"
                    >
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `text-[11px] transition-all block py-1 px-2 rounded-md ${isActive
                                    ? 'text-blue-400 font-semibold'
                                    : 'text-gray-300 hover:text-white'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </motion.div>
                ))}
            </nav>
        </motion.div>
    );
};

export default MobileBottomNavbar;
