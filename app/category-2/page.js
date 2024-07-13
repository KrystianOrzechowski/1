
import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Category2() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="archive-header pt-50 pb-50 bg-2 mb-50">
                        <div className="container">
                            <div className="widget-header-1 font-primary mb-30">
                                <span className="widget-subtitle position-relative text-primary"><span className="divider-separator" />Category</span>
                                <h2 className="widget-title mt-5 mb-30">Travel Tips<sup>326 posts</sup></h2>
                            </div>
                            <div className="breadcrumb">
                                <Link href="/" rel="nofollow">Home</Link>
                                <span /> Travel
                            </div>
                        </div>
                    </div>
                    <div className="container mb-50">
                        <div className="row">
                            <div className="col-lg-8">
                                <article className="mb-50 wow animated fadeIn">
                                    <figure className="mb-20 position-relative">
                                        <Link href="/single"><img src="/assets/imgs/posts/img-21.jpg" alt="athena" /></Link>
                                        <div className="post-meta font-primary text-uppercase rotate-90 top-left">
                                            <span>16, September 2024</span>
                                        </div>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Blog</Link></span>
                                    </div>
                                    <h3 className="post-title">
                                        <Link href="/single">How to Work From Home: 20 Tips From People Who Do It Successfully</Link>
                                    </h3>
                                </article>
                                <BlogPost showItem={4} showStart={28} showEnd={40} style={7} showPagination col="row mb-30 wow animated fadeIn" />                              
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar-widget post-module-4 mb-50">
                                    <div className="widget-header-2 font-primary mb-30 wow animated fadeIn">
                                        <h2 className="widget-title mb-30">Editor's picked</h2>
                                    </div>
                                    <article className="row align-items-center mb-30 wow animated fadeIn">
                                        <figure className="col-md-4 mb-0">
                                            <Link href="/single"><img src="/assets/imgs/posts/thumb-1.jpg" alt="athena" /></Link>
                                        </figure>
                                        <div className="col-md-8 pl-0">
                                            <h5 className="post-title">
                                                <Link href="/single">The World Caters to Average Editor's picked</Link>
                                            </h5>
                                            <div className="post-meta mb-10 font-primary text-uppercase">
                                                <span className="category mr-15"><Link href="/category">Lifestyle</Link></span>
                                                <span className="date">By <Link className="text-primary" href="/author">Elizabeth</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center mb-30 wow animated fadeIn">
                                        <figure className="col-md-4 mb-0">
                                            <Link href="/single"><img src="/assets/imgs/posts/thumb-5.jpg" alt="athena" /></Link>
                                        </figure>
                                        <div className="col-md-8 pl-0">
                                            <h5 className="post-title">
                                                <Link href="/single">The most haunted spot in every state</Link>
                                            </h5>
                                            <div className="post-meta mb-10 font-primary text-uppercase">
                                                <span className="category mr-15"><Link href="/category">Lifestyle</Link></span>
                                                <span className="date">By <Link className="text-primary" href="/author">Elizabeth</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center mb-30 wow animated fadeIn">
                                        <figure className="col-md-4 mb-0">
                                            <Link href="/single"><img src="/assets/imgs/posts/thumb-6.jpg" alt="athena" /></Link>
                                        </figure>
                                        <div className="col-md-8 pl-0">
                                            <h5 className="post-title">
                                                <Link href="/single">Virtuoso Reveals Travel Trends for Fall, Holidays and 2021</Link>
                                            </h5>
                                            <div className="post-meta mb-10 font-primary text-uppercase">
                                                <span className="category mr-15"><Link href="/category">Lifestyle</Link></span>
                                                <span className="date">By <Link className="text-primary" href="/author">Elizabeth</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center mb-30 wow animated fadeIn">
                                        <figure className="col-md-4 mb-0">
                                            <Link href="/single"><img src="/assets/imgs/posts/thumb-8.jpg" alt="athena" /></Link>
                                        </figure>
                                        <div className="col-md-8 pl-0">
                                            <h5 className="post-title">
                                                <Link href="/single">16 of the best places in the US to visit in the fall</Link>
                                            </h5>
                                            <div className="post-meta mb-10 font-primary text-uppercase">
                                                <span className="category mr-15"><Link href="/category">Lifestyle</Link></span>
                                                <span className="date">By <Link className="text-primary" href="/author">Elizabeth</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center mb-30 wow animated fadeIn">
                                        <figure className="col-md-4 mb-0">
                                            <Link href="/single"><img src="/assets/imgs/posts/thumb-1.jpg" alt="athena" /></Link>
                                        </figure>
                                        <div className="col-md-8 pl-0">
                                            <h5 className="post-title">
                                                <Link href="/single">Best Places to Travel in October</Link>
                                            </h5>
                                            <div className="post-meta mb-10 font-primary text-uppercase">
                                                <span className="category mr-15"><Link href="/category">Lifestyle</Link></span>
                                                <span className="date">By <Link className="text-primary" href="/author">Elizabeth</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="sidebar-widget advertise-banner text-center wow animated fadeIn">
                                    <img src="/assets/imgs/ads/ads.jpg" alt="athena" />
                                </div>
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