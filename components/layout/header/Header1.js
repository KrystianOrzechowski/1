import dynamic from 'next/dynamic'
const ThemeSwitch = dynamic(() => import('@/components/elements/ThemeSwitch'), {
    ssr: false,
})
import Link from "next/link"
import SlickNav from "../SlickNav"

export default function Header1({scroll, isSidebar, handleSidebar, isMobileMenu, handleMobileMenu, handleSearch }) {
    return (
        <>
            <header className={`main-header header-sticky header-style-1 bg-white ${scroll?"sticky-bar":""}`}>
                {/*Main navigation*/}
                <div className="container">
                    <div className="mobile_menu d-lg-none d-block">
                        <SlickNav isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                    </div>
                    <div className="mobile_logo d-md-none">
                        <h1 className="font-secondary"><Link href="/">Athena</Link></h1>
                    </div>
                    <div className="mobile-search d-md-none">
                        <button className="search-icon d-inline" onClick={handleSearch}>
                            <i className="athena-search mr-5" />
                        </button>
                    </div>
                    <div className="row align-items-center d-none d-md-flex">
                        <div className="col-lg-5 col-md-4">
                            <div className="off-canvas-toggle-cover d-none d-lg-inline-block mr-20" onClick={handleSidebar}>
                                <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle">
                                    <span />
                                </div>
                            </div>
                            <ul className="main-menu d-none d-lg-inline font-primary">
                                <li className="menu-item-has-children">
                                    <Link href="/">Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/">Home 1</Link></li>
                                        <li><Link href="/home-2">Home 2</Link></li>
                                        <li><Link href="/home-3">Home 3</Link></li>
                                    </ul>
                                </li>

                                <li className="menu-item-has-children">
                                    <Link href="#">Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/page-author">Author</Link></li>
                                        <li><Link href="/page-contact">Contact</Link></li>
                                        <li><Link href="/page-search">Search</Link></li>
                                        <li><Link href="/page-register">Register</Link></li>
                                        <li><Link href="/page-login">Login</Link></li>
                                        <li><Link href="/page-protected">Protect Content</Link></li>
                                        <li><Link href="/page-404">Error 404</Link></li>
                                    </ul>
                                </li>

                                <li className="menu-item-has-children">
                                    <Link href="/category">Blog</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="category">Archive 1</Link></li>
                                        <li><Link href="/category-2">Archive 2</Link></li>
                                        <li><Link href="/category-3">Archive 3</Link></li>
                                        <li><Link href="/single">Single 1</Link></li>
                                        <li><Link href="/single-2">Single 2</Link></li>
                                        <li><Link href="/single-3">Single 3</Link></li>
                                    </ul>
                                </li>
                                <li> <Link href="/page-contact">Contact</Link> </li>
                            </ul>
                            {/*Mobile menu*/}
                            <ul id="mobile-menu" className="d-none">
                                <li className="menu-item-has-children">
                                    <Link href="/#">Recipes</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/category">Specialty Diets</Link></li>
                                        <li><Link href="/category-2">Meal Prep Recipes</Link></li>
                                        <li><Link href="/category-3">Whole30</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><Link href="/#">Lifestyle</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/category-4">Style</Link></li>
                                        <li><Link href="/category">Travel</Link></li>
                                        <li><Link href="/category-2">Shop</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><Link href="/#">Shop</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/category-3">Clothing</Link></li>
                                        <li><Link href="/category-4">Beauty</Link></li>
                                        <li><Link href="/category">Kitchen</Link></li>
                                        <li><Link href="/category-2">Home</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            {/*Logo and tagline */}
                            <div className="header-logo text-center">
                                <h1 className="font-secondary"><Link href="/">Athena</Link></h1>
                                <p className="tagline font-primary">Creative Magazine</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4 text-end">
                            <div className="d-flex flex-end justify-content-end align-items-center">
                                <ThemeSwitch />
                                <div className="d-flex align-items-center">
                                    <Link className="social-icon text-xs-center mx-1 pt-1" target="_blank" href="/#"><i className="ui-facebook-fill" /></Link>
                                    <Link className="social-icon text-xs-center mx-1 pt-1" target="_blank" href="/#"><i className="ui-twitter-x-line" /></Link>
                                    <Link className="social-icon text-xs-center mx-1 pt-1" target="_blank" href="/#"><i className="ui-pinterest-fill" /></Link>
                                    <Link className="social-icon text-xs-center mx-1 pt-1" target="_blank" href="/#"><i className="ui-instagram-line" /></Link>
                                </div>
                                <button className="search-icon d-flex align-items-center" onClick={handleSearch}>
                                    <i className="athena-search mr-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
