import { SiteConstants } from "@/data/SiteConstants";
import Logo from '@/data/spanky.svg';

import Link from "next/link";

const Header = () => {
    return (
        <header className="flex items-center justify-between py-10">
            <div>
                <Link href="/" aria-label={SiteConstants.header}>
                    <div className="flex items-center justify-between">
                        <div className="mr-3">
                            <Logo />
                        </div>
                        <div className="hidden h-6 text-2xl font-semibold sm:block">
                            {SiteConstants.header}
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;