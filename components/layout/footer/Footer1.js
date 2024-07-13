import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="fixed-footer bg-dark text-white pt-100 pb-100 overflow-hidden">
                <div className="container-larger">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 text-center  d-none d-md-flex">
                            <img className="d-inline-block float-lg-left mb-30 mr-30" src="/assets/imgs/ads/ads-2.jpg" alt="ads2" />
                            <div className="d-inline-block">
                                <div className="header-logo mb-20">
                                    <h1 className="font-secondary"><Link className="text-white" href="/">Athena</Link></h1>
                                    <p className="tagline font-primary">Creative Magazine</p>
                                </div>
                                <p className="site-des">123 Main Street <br />New York, NY 10001</p>
                                <div className="view-more text-center mt-30">
                                    <button className="btn btn-outline-white border-radius-0 font-weight-thin">Subcrible</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col">
                                    <h5 className="widget-title-muted mb-15">About</h5>
                                    <ul className="mb-30 mr-30 text-white">
                                        <li className="cat-item cat-item-2"><Link className="text-white" href="/category">Terms  Conditions</Link></li>
                                        <li className="cat-item cat-item-3"><Link className="text-white" href="/category">Help  Support Policy</Link></li>
                                        <li className="cat-item cat-item-4"><Link className="text-white" href="/category">Licensing Policy</Link></li>
                                        <li className="cat-item cat-item-5"><Link className="text-white" href="/category">Refund Policy</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h5 className="widget-title-muted mb-15">News</h5>
                                    <ul className="mb-30 mr-30 text-white">
                                        <li className="cat-item cat-item-2"><Link className="text-white" href="/category">Mindfulness</Link></li>
                                        <li className="cat-item cat-item-3"><Link className="text-white" href="/category">Environment</Link></li>
                                        <li className="cat-item cat-item-4"><Link className="text-white" href="/category">Religion</Link></li>
                                        <li className="cat-item cat-item-5"><Link className="text-white" href="/category">Recipes</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h5 className="widget-title-muted mb-15">Travel</h5>
                                    <ul className="mb-30 mr-30 text-white">
                                        <li className="cat-item cat-item-2"><Link className="text-white" href="/category">Destinations</Link></li>
                                        <li className="cat-item cat-item-3"><Link className="text-white" href="/category">Travel Tips</Link></li>
                                        <li className="cat-item cat-item-4"><Link className="text-white" href="/category">Hotels review</Link></li>
                                        <li className="cat-item cat-item-5"><Link className="text-white" href="/category">Air ticket</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h5 className="widget-title-muted mb-15">Healthy</h5>
                                    <ul className="mb-30 mr-30 text-white">
                                        <li className="cat-item cat-item-2"><Link className="text-white" href="/category">Integrative Health</Link></li>
                                        <li className="cat-item cat-item-3"><Link className="text-white" href="/category">Mental Health</Link></li>
                                        <li className="cat-item cat-item-4"><Link className="text-white" href="/category">Health Food</Link></li>
                                        <li className="cat-item cat-item-5"><Link className="text-white" href="/category">Sleep Disorders</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copy-right text-center mt-30">
                        <p className="font-medium mb-0"><span className="text-muted">© 2024, Athena Magazine | All rights reserved | Designed by </span><Link href="/https://alithemes.com" target="_blank" className="text-primary">AliThemes.com</Link></p>
                    </div>
                </div>
            </footer>

        </>
    )
}
