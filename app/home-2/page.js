import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home2() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <div>
                    <div className="container mb-30 pt-50">
                        <div className="sidebar-widget post-module-1">
                            <div className="row mb-30">
                                <BlogPost showItem={2} showStart={0} showEnd={2} style={1} col="col-md-6 mb-30" />
                               
                                <BlogPost showItem={3} showStart={0} showEnd={5} style={5} col="col-lg-4 col-md-6 mb-50" />
                               
                                <BlogPost showItem={4} showStart={0} showEnd={5} style={6} col="col-lg-3 col-md-6 mb-50" />
                              
                            </div>
                            <div className="view-more text-center">
                                <button className="btn btn-outline-primary border-radius-0 font-weight-thin">View all trending articles</button>
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