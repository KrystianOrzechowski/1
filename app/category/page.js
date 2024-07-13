
import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Category() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="archive-header pt-50 pb-50 bg-1 mb-50">
                        <div className="container">
                            <div className="widget-header-1 font-primary mb-30">
                                <span className="widget-subtitle position-relative text-primary"><span className="divider-separator" />Category</span>
                                <h2 className="widget-title mt-5 mb-30">Lifestyle<sup>235 posts</sup></h2>
                            </div>
                            <div className="breadcrumb">
                                <Link href="/" rel="nofollow">Home</Link>
                                <span /> Lifestyle
                            </div>
                        </div>
                    </div>
                    <div className="container mb-50">
                        <div className="sidebar-widget post-module-1">
                            <div className="row mb-50">
                                <BlogPost showItem={2} showStart={0} showEnd={2} style={1} col="col-md-6 mb-30" />
                                <BlogPost showItem={4} showStart={0} showEnd={5} style={6} col="col-lg-3 col-md-6 mb-30 wow animated fadeIn" />
                              
                                <div className="col-lg-12 mt-50 mb-80 text-center wow animated fadeIn">
                                    <img className="d-inline" src="/assets/imgs/ads/ads-3.png" alt="athena" />
                                </div>
                                <BlogPost showItem={9} showStart={0} showEnd={9} style={5} col="col-lg-4 col-md-6 mb-30 wow animated fadeIn" />
                              
                            </div>
                           
                            <div className="view-more text-center wow animated fadeIn">
                                <button className="btn btn-outline-primary border-radius-0 font-weight-thin">Load more posts</button>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-widget widget-instagram bg-white pt-50 wow animated fadeIn">
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