'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function SlickNav({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="slicknav_menu">
                <div className={`container ${isMobileMenu ? "slicknav_collapsed" : "slicknav_open"} `}>
                    <a onClick={handleMobileMenu} aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed">
                        <span className="slicknav_menutxt">MENU</span>
                        <span className="slicknav_icon">
                            <span className="menu-icon">
                                <span className="menu-icon-inner" /></span><span className="menu-text ml-5">Menu</span></span></a>
                </div>
                <ul className="slicknav_nav" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                    <li className={`menu-item-has-children ${isActive.key == 1 ? "slicknav_collapsed" : "slicknav_open"}`}>
                        <Link href="#" className="slicknav_item slicknav_row">

                            Recipes
                            <span className="slicknav_arrow" onClick={() => handleClick(1)}>+</span>
                        </Link>
                        <ul className="sub-menu slicknav_hidden" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                            <li><Link href="/category">Specialty Diets</Link></li>
                            <li><Link href="/category-2">Meal Prep Recipes</Link></li>
                            <li><Link href="/category-3">Whole30</Link></li>
                        </ul>
                    </li>
                    <li className={`menu-item-has-children ${isActive.key == 2 ? "slicknav_collapsed" : "slicknav_open"}`}>
                        <Link href="#" className="slicknav_item slicknav_row">
                            Lifestyle
                            <span className="slicknav_arrow" onClick={() => handleClick(2)}>+</span>
                        </Link>
                        <ul className="sub-menu slicknav_hidden" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                            <li><Link href="/category-4">Style</Link></li>
                            <li><Link href="/category">Travel</Link></li>
                            <li><Link href="/category-2">Shop</Link></li>
                        </ul>
                    </li>
                    <li className={`menu-item-has-children ${isActive.key == 3 ? "slicknav_collapsed" : "slicknav_open"}`}>
                        <Link href="#" className="slicknav_item slicknav_row" >Shop
                            <span className="slicknav_arrow" onClick={() => handleClick(3)}>+</span>
                        </Link>
                        <ul className="sub-menu slicknav_hidden" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                            <li><Link href="/category-3">Clothing</Link></li>
                            <li><Link href="/category-4">Beauty</Link></li>
                            <li><Link href="/category">Kitchen</Link></li>
                            <li><Link href="/category-2">Home</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
