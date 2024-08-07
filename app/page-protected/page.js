import Layout from "@/components/layout/Layout"

export default function Search() {
    return (
      <>
        <Layout headerStyle={1} footerStyle={1}>
          <div className="container mb-50 pt-120 pb-80 text-center">
            <div className="entry-page-wraper mb-120">
              <svg
                width="40px"
                height="40px"
                version="1.1"
                id="fi_641693"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
                fill="#666"
              >
                <g>
                  <g>
                    <path
                      d="M255.999,0c-79.044,0-143.352,64.308-143.352,143.353v70.193c0,4.78,3.879,8.656,8.659,8.656h48.057
                                  c4.78,0,8.656-3.876,8.656-8.656v-70.193c0-42.998,34.981-77.98,77.979-77.98s77.979,34.982,77.979,77.98v70.193
                                  c0,4.78,3.88,8.656,8.661,8.656h48.057c4.78,0,8.656-3.876,8.656-8.656v-70.193C399.352,64.308,335.044,0,255.999,0z
                                  M382.04,204.89h-30.748v-61.537c0-52.544-42.748-95.292-95.291-95.292s-95.291,42.748-95.291,95.292v61.537h-30.748v-61.537
                                  c0-69.499,56.54-126.04,126.038-126.04c69.499,0,126.04,56.541,126.04,126.04V204.89z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M410.63,204.89H101.371c-20.505,0-37.188,16.683-37.188,37.188v232.734c0,20.505,16.683,37.188,37.188,37.188H410.63
                                  c20.505,0,37.187-16.683,37.187-37.189V242.078C447.817,221.573,431.135,204.89,410.63,204.89z M430.505,474.811
                                  c0,10.96-8.916,19.876-19.875,19.876H101.371c-10.96,0-19.876-8.916-19.876-19.876V242.078c0-10.96,8.916-19.876,19.876-19.876
                                  H410.63c10.959,0,19.875,8.916,19.875,19.876V474.811z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M285.11,369.781c10.113-8.521,15.998-20.978,15.998-34.365c0-24.873-20.236-45.109-45.109-45.109
                                  c-24.874,0-45.11,20.236-45.11,45.109c0,13.387,5.885,25.844,16,34.367l-9.731,46.362c-0.535,2.554,0.108,5.211,1.752,7.236
                                  c1.645,2.023,4.113,3.2,6.72,3.2h60.738c2.608,0,5.076-1.176,6.719-3.2c1.643-2.026,2.286-4.683,1.751-7.234L285.11,369.781z
                                  M270.851,358.82c-3.04,1.936-4.565,5.553-3.824,9.081l8.68,41.366h-39.415l8.682-41.363c0.74-3.529-0.782-7.146-3.824-9.081
                                  c-8.108-5.16-12.948-13.911-12.948-23.406c0-15.327,12.469-27.796,27.797-27.796c15.327,0,27.796,12.469,27.796,27.796
                                  C283.797,344.914,278.957,353.663,270.851,358.82z"
                    />
                  </g>
                </g>
              </svg>
              <h1 className="font-secondary mt-20">Protected Content</h1>
              <p className="w-50 mx-auto text-muted">
                This content is protected. To view it please <br />
                enter your password below:
              </p>
              <div className="row">
                <div className="col-md-4 mx-auto">
                  {/*Form Register*/}
                  <form
                    className="form-contact comment_form mt-20"
                    action="#"
                    id="commentForm"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group text-start">
                          <label htmlFor="password">Password</label>
                          <input
                            className="form-control mt-5"
                            name="password"
                            id="website"
                            type="password"
                            placeholder="*********"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-10 text-start">
                      <button
                        type="submit"
                        className="button button-contactForm  mt-5"
                      >
                        Enter
                      </button>
                    </div>
                  </form>
                  {/*End Form Register*/}
                  <p className="mt-30 mb-10 text-center">
                    <span className="text-muted">
                      If you is a premium member, please
                    </span>{" "}
                    <a href="/page-login">Login</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
}