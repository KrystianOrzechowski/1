import Link from "next/link"

export default function BlogCard2({ col, desc, item  }) {
    return (
        <>
            <article className={`${col ? col : ""}`}>
                <div className="col-md-4">
                    <figure className="mb-0">
                        <Link href={`/blog/${item.id}`}><img src={`/assets/imgs/posts/${item.img}`} alt="athena" /></Link>
                        <div className="post-meta font-primary text-uppercase rotate-90 top-left">
                        <span>{item.date}</span>
                        </div>
                    </figure>
                </div>
                <div className="col-md-8 pl-0">
                    <h3 className="post-title">
                        <Link href={`/blog/${item.id}`}>{item.title.rendered}</Link>
                    </h3>
                    <div className="post-meta mb-10 font-primary text-uppercase">
                        <span className="category mr-15"><Link href="/category">Lifestyle</Link></span>
                        <span className="date">By <Link className="text-primary" href="/author">Serena </Link></span>
                    </div>
                    <div className="post-excerpt text-muted">
                        <p className="mb-0">
                            Tollit ceteros disputationi nam cu, purto volutpat in usu. Ludus accusata neglegentur per ea, pri ea commodo admodum invenire
                        </p>
                    </div>
                </div>
            </article>

        </>
    )
}
