import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t('header.title')}</h3>
                        <p className="text-gray-400">
                            {t('footer.description')}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">{t('footer.quickLinks')}</h4>
                        <ul className="space-y-2">
                            <li><Link to="/hiking-trails" className="text-gray-400 hover:text-white">{t('header.nav.hikingTrails')}</Link></li>
                            <li><Link to="/events" className="text-gray-400 hover:text-white">{t('header.nav.events')}</Link></li>
                            <li><Link to="/equipment" className="text-gray-400 hover:text-white">{t('header.nav.equipment')}</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">{t('footer.resources')}</h4>
                        <ul className="space-y-2">
                            <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                            <li><Link to="/safety-tips" className="text-gray-400 hover:text-white">Safety Tips</Link></li>
                            <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">{t('footer.stayConnected')}</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} {t('header.title')}. {t('footer.allRightsReserved')}</p>
                    <div className="mt-2 space-x-4">
                        <Link to="/terms" className="hover:text-white">{t('footer.terms')}</Link>
                        <Link to="/privacy" className="hover:text-white">{t('footer.privacy')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
