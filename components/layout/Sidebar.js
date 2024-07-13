import Link from "next/link"

export default function Sidebar({isSidebar, handleSidebar}) {
    return (
        <>
            <aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar">
                <button className="off-canvas-close" onClick={handleSidebar}><i className="athena-cancel" /></button>
                <div className="sidebar-inner">
                    <div className="sidebar-widget widget-creative-menu">
                        <ul>
                            <li><Link href="/category">Blog<sup>235</sup></Link></li>
                            <li><Link href="/category-2">Lifestyle<sup>186</sup></Link></li>
                            <li><Link href="/category-3">Inspiration<sup>98</sup></Link></li>
                            <li><Link href="/category-4">Healthy<sup>247</sup></Link></li>
                        </ul>
                    </div>
                    <div className="sidebar-widget widget-menu pt-30">
                        <div className="widget-header-3 font-primary mb-20">
                            <h5 className="widget-title text-uppercase text-white">Follow</h5>
                        </div>
                        <ul>
                            <li><Link href="/#">Facebook</Link></li>
                            <li><Link href="/#">Instagram</Link></li>
                            <li><Link href="/#">Behance</Link></li>
                            <li><Link href="/#">Pinterest</Link></li>
                        </ul>
                    </div>
                    <div className="offcanvas-copyright">
                        <p className="text-muted text-uppercase mb-0">Athena Magazine</p>
                        <p className="text-muted mb-0 font-medium">123 Main Street</p>
                        <p className="text-muted mb-0 font-medium">New York, NY 10001</p>
                    </div>
                </div>
            </aside>
        </>
    )
}
