import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Author() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="archive-header pt-50">
                        <div className="container">
                            <div className="author-bio row">
                                <div className="author-info col-lg-6">
                                    <img src="/assets/imgs/authors/author-3.jpg" alt="athena" className="avatar mb-15" />
                                    <h5 className="font-weight-bold mb-10"><span className="vcard author"><span className="fn"><Link href="/author" title="Posted by Barbara Cartland" rel="author">Azumi Brilanca</Link></span></span>
                                    </h5>
                                    <div className="author-description text-muted">You should write because you love the shape of stories and sentences and the creation of different words on a page. Graduating from a top accelerator or incubator can be as career-defining for a startup founder as an elite university diploma.</div>
                                    <h6>Follow</h6>
                                    <div className="author-social">
                                        <ul className="header-social-network d-none d-md-inline-block list-inline">
                                            <li className="list-inline-item"><Link className="social-icon fb text-xs-center" target="_blank" href="/#"><i className="athena-facebook" /></Link></li>
                                            <li className="list-inline-item"><Link className="social-icon tw text-xs-center" target="_blank" href="/#"><i className="athena-twitter" /></Link></li>
                                            <li className="list-inline-item"><Link className="social-icon pt text-xs-center" target="_blank" href="/#"><i className="athena-instagram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-50">
                        <div className="sidebar-widget post-module-1">
                            <div className="widget-header-2 font-primary mb-30">
                                <h2 className="widget-title mb-30">Articles posted <sup className="text-primary">( 135 )</sup> </h2>
                            </div>
                            <div className="row mb-50">
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-1.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Travel</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">The World's Most Refined Mountaineering Equipment </Link>
                                    </h5>
                                </article>
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-2.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Ideas</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">Carrie Underwood Shows Off Her Abs in Bikini Selfie: 'Is It Summer Yet?'</Link>
                                    </h5>
                                </article>
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-3.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Home Decor</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">These Merrell Sandals Are the Most Comfortable Slides I’ve Ever Worn </Link>
                                    </h5>
                                </article>
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-4.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Foody</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">This Oprah-Approved Brand Is Offering Up to 40% Off Its Comfy Shoes for 4th of July </Link>
                                    </h5>
                                </article>
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-5.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Decor</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">The Boody Bra Is So Comfortable, Even Bra Haters Can’t Stop Raving About It </Link>
                                    </h5>
                                </article>
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-6.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Healthy</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">Jennifer Aniston Called These Leggings a 'Fitness Staple'</Link>
                                    </h5>
                                </article>
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-7.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Fashion</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">The Unexpected Place You Can Score a Ton of Comfy Shoes for Up to 75% Off Right Now </Link>
                                    </h5>
                                </article>
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-8.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Blog</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">These Aerie Bike Shorts Made Me Break Up With Leggings for Summer </Link>
                                    </h5>
                                </article>
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-9.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Inspiration</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">The Sneakers Emily Ratajkowski Wears on Repeat Just Got Even More Affordable </Link>
                                    </h5>
                                </article>
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-10.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Landing</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">You Can Already Score Vionic Sandals on Sale Ahead of Memorial Day</Link>
                                    </h5>
                                </article>
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-11.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Room</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">This Bralette Is So Comfy, I’m Never Going Back to Real Bras Again </Link>
                                    </h5>
                                </article>
                                <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn">
                                    <figure className="mb-20">
                                        <Link href="/single"><img src="/assets/imgs/posts/thumb-12.jpg" alt="athena" /></Link>
                                    </figure>
                                    <div className="post-meta mb-10 font-primary text-uppercase">
                                        <span><Link href="/category">Tips</Link></span>
                                    </div>
                                    <h5 className="post-title">
                                        <Link href="/single">This Sports Bra Is So Comfortable, I Own It in 5 Different Colors</Link>
                                    </h5>
                                </article>
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