import { SiteConstants } from "@/data/SiteConstants";
import HeaderLinks from "@/data/HeaderLinks";
import Logo from '@/data/spanky.svg';

import Link from "next/link";

const Header = () => {
    return (
        <header className="flex items-center justify-between py-5">
            <div>
                <Link href="/" aria-label={SiteConstants.header}>
                    <div className="flex items-center justify-between">
                        <div className="mr-3">
                            <Logo />
                        </div>
                        <div className="hidden h-6 text-2xl font-bold sm:block">
                            {SiteConstants.header}
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                {HeaderLinks
                    .map((link) => (
                        <Link
                            key={link.caption}
                            href={link.path}
                            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                        >
                            {link.caption}
                        </Link>
                    ))}
            </div>
        </header>
    );
};

export default Header;