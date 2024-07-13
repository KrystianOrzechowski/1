import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Contact() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="archive-header pt-50">
                        <div className="container">
                            <h1>Get In Touch</h1>
                            <div className="breadcrumb pl-0">
                                <Link href="/" rel="nofollow">Home</Link>
                                <span /> Contact
                            </div>
                        </div>
                    </div>
                    <div className="container mb-50">
                        <article className="entry-page-wraper mb-50">
                            <div className="excerpt mb-30">
                                <p>Graeci docendi pro id. Quo aperiri menandri iracundia at, id ius paulo luptatum mediocrem. Impetus salutatus assentior eu pri. Cum ne nobis elaboraret voluptatibus, id mea brute debet.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-5">
                                    <h3>Contact</h3>
                                    <p className="text-muted">
                                        <strong>Address:</strong> Lorem 142 Str., 2352, Ipsum, State, USA <br />
                                        <strong>Phone:</strong> +01-234 56789
                                    </p>
                                    <p className="text-muted">If you would like to partner with Ultra at our next event, contact us at contact@athena.io.</p>
                                    <hr className="section-divider" />
                                    <h3>Advertise with us</h3>
                                    <p className="text-muted">Please contact us directly at ads@athena.io. For large or unique campaigns please email sale@athena.io for requests-for-proposal and additional pricing information. </p>
                                    <hr className="section-divider" />
                                    <h3>Partnerships</h3>
                                    <p className="text-muted">We are a professional event management team, starting in 2012. Please send request details to email event@athena.io</p>
                                </div>
                                <div className="col-lg-1" />
                                <div className="col-lg-6">
                                    <h3>Get in touch</h3>
                                    <form className="form-contact comment_form mt-20" action="#" id="commentForm">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input className="form-control" name="website" id="website" type="text" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9} placeholder="Message" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="button button-contactForm">Send message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </article>
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