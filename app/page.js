import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import PostSlider3 from "@/components/slider/PostSlider3"
import PostSlider4 from "@/components/slider/PostSlider4"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="container pt-30 mb-50">
                        <PostSlider3 />
                    </div>
                    <div className="container mb-50">
                        <div className="sidebar-widget post-module-1">
                            <div className="widget-header-1 font-primary mb-30">
                                <span className="widget-subtitle position-relative text-primary"><span className="divider-separator" />Trending</span>
                                <h2 className="widget-title mt-5 mb-30">Most Popular</h2>
                            </div>
                            <div className="row mb-50">
                                <BlogPost showItem={2} showStart={0} showEnd={2} style={1} col="col-md-6 mb-30" />
                                <BlogPost showItem={3} showStart={2} showEnd={5} style={1} col="col-lg-4 col-md-6" />

                            </div>
                            <div className="view-more text-center">
                                <Link href="/category" className="btn btn-outline-primary border-radius-0 font-weight-thin">View all trending articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-50">
                        <div className="sidebar-widget post-slider-4">
                            <div className="widget-header-1 font-primary mb-30">
                                <span className="widget-subtitle position-relative text-primary"><span className="divider-separator" />Lifestyle</span>
                                <h2 className="widget-title mt-5 mb-30">Interior  Home Decoration</h2>
                            </div>
                            <PostSlider4 />
                        </div>
                    </div>
                    <div className="container-larger mb-80">
                        <div className="sidebar-widget post-module-2 p-80 bg-white has-border">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="widget-header-1 font-primary mb-50">
                                        <span className="widget-subtitle position-relative text-primary"><span className="divider-separator" />Travel</span>
                                        <h2 className="widget-title mt-5 mb-30">Explore interesting journeys</h2>
                                    </div>
                                    <BlogPost showItem={3} showStart={2} showEnd={5} style={2} col="row mb-30" />                                    
                                </div>
                                <div className="col-lg-5">
                                    <div className="view-more text-end mb-30">
                                        <button className="btn btn-outline-primary border-radius-0 font-weight-thin d-none d-lg-inline-block">View more</button>
                                    </div>
                                    <BlogPost showItem={3} showStart={6} showEnd={9} style={2} col="row mb-30" />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-50">
                        <div className="sidebar-widget post-module-3">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="widget-header-1 font-primary mb-50">
                                        <span className="widget-subtitle position-relative text-primary"><span className="divider-separator" />Recently</span>
                                        <h2 className="widget-title mt-5 mb-30">Latest Stories</h2>
                                    </div>
                                    <BlogPost showItem={5} showStart={29} showEnd={36} style={2} showPagination col="row mb-30" />
                                </div>
                                <div className="col-lg-4">
                                    <div className="sidebar-widget post-module-4 mb-50">
                                        <div className="widget-header-2 font-primary mb-30">
                                            <h2 className="widget-title mb-30">Editor's picked</h2>
                                        </div>
                                        <BlogPost showItem={4} showStart={29} showEnd={36} style={4} col="row align-items-center mb-30" />                                        
                                    </div>
                                    <div className="sidebar-widget advertise-banner text-center">
                                        <img src="/assets/imgs/ads/ads.jpg" alt="athena" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-widget widget-instagram bg-white pt-50">
                        <div className="widget-header-2 font-primary mb-50 text-center">
                            <i className="athena-instagram mr-5" /><span className="widget-subtitle position-relative text-primary">athena</span>
                            <h3 className="widget-title mt-5 mb-0">Follow Me On Instagram </h3>
                            <span className="font-small text-muted">Followed by: 256,215</span>
                        </div>
                        <ul className="alith-row alith-gap-0 overflow-hidden">
                            <li className="alith-col alith-col-6">
                                <Link target="_blank" href="/#">
                                    <img alt="instar" src="/assets/imgs/posts/thumb-9.jpg" />
                                </Link>
                            </li>
                            <li className="alith-col alith-col-6">
                                <Link target="_blank" href="/#">
                                    <img alt="instar" src="/assets/imgs/posts/thumb-10.jpg" />
                                </Link>
                            </li>
                            <li className="alith-col alith-col-6">
                                <Link target="_blank" href="/#">
                                    <img alt="instar" src="/assets/imgs/posts/thumb-11.jpg" />
                                </Link>
                            </li>
                            <li className="alith-col alith-col-6">
                                <Link target="_blank" href="/#">
                                    <img alt="instar" src="/assets/imgs/posts/thumb-12.jpg" />
                                </Link>
                            </li>
                            <li className="alith-col alith-col-6">
                                <Link target="_blank" href="/#">
                                    <img alt="instar" src="/assets/imgs/posts/thumb-13.jpg" />
                                </Link>
                            </li>
                            <li className="alith-col alith-col-6">
                                <Link target="_blank" href="/#">
                                    <img alt="instar" src="/assets/imgs/posts/thumb-14.jpg" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Layout>
        </>
    )
}