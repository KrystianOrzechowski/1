import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Search() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
            <div className="container mb-50 pt-120 pb-80 text-center">
                    <div className="entry-page-wraper mb-120">
                        <h1 className="font-secondary">Welcome Back!</h1>
                        <p className="w-50 mx-auto text-muted">Login to your account</p>                        
                        <div className="row">
                            <div className="col-md-4 mx-auto">                                
                            <form className="form-contact comment_form mt-20" action="#" id="commentForm">
                                <div className="row">
                                    <div className="col-sm-12 mb-15">
                                    <div className="form-group text-start">
                                        <label htmlFor="name">Username or Email</label>
                                        <input className="form-control mt-5" name="username" id="name" type="text" placeholder="Username" />
                                    </div>
                                    </div>
                                    <div className="col-12 mb-15">
                                    <div className="form-group text-start">
                                        <label htmlFor="password">Password</label>
                                        <input className="form-control mt-5" name="password" id="website" type="password" placeholder="*********" />
                                    </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="form-check d-flex">
                                    <input className="form-check-input mr-5" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Remember me
                                    </label>
                                    </div>
                                    <a href="#" className="text-muted">Forgot password?</a>
                                </div>
                                <div className="form-group mt-30 text-start">
                                    <button type="submit" className="button button-contactForm  mt-5">Sign In</button>
                                </div>
                            </form>
                                <p className="mt-50 mb-10 text-center text-muted">Or sign in with</p>
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <a href="#" className="btn btn-social btn-facebook d-flex gap-2 align-items-center w-100 justify-content-center">
                                    <svg width="20px" height="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 112.196 112.196" style={{enableBackground: 'new 0 0 112.196 112.196'}} xmlSpace="preserve">                                           
                                        <circle style={{fill: '#3B5998'}} cx="56.098" cy="56.098" r="56.098" />
                                        <path style={{fill: '#FFFFFF'}} d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34 c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z" />
                                    </svg>
                                    Continue with Facebook</a>
                                    <a href="#" className="btn btn-social btn-google d-flex gap-2 align-items-center w-100 justify-content-center">
                                    <svg width="20px" height="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                                        <path style={{fill: '#FBBB00'}} d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                                                                    c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                                                                    C103.821,274.792,107.225,292.797,113.47,309.408z" />
                                        <path style={{fill: '#518EF8'}} d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                                                                    c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                                                                    c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
                                        <path style={{fill: '#28B446'}} d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                                                                    c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                                                                    c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
                                        <path style={{fill: '#F14336'}} d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                                                                    c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                                                                    C318.115,0,375.068,22.126,419.404,58.936z" />
                                    </svg>
                                    Continue with Google
                                    </a>
                                </div>
                                <p className="mt-30 mb-10 text-center"><span className="text-muted">Don't have an account?</span> <Link href="/page-register">Create one</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}