import Link from "next/link"

export default function BlogCard4({ col, desc, item }) {
    return (
        <>
            <article className={`${col ? col : ""}`}>
                <figure className="col-md-4 mb-0">
                    <Link href={`/blog/${item.id}`}><img src={`/assets/imgs/posts/${item.img}`} alt="athena" /></Link>
                </figure>
                <div className="col-md-8 pl-0">
                    <h5 className="post-title">
                        <Link href={`/blog/${item.id}`}>{item.title.rendered}</Link>
                    </h5>
                    <div className="post-meta mb-10 font-primary text-uppercase">
                        <span className="category mr-15"><Link href="/category">Lifestyle</Link></span>
                        <span className="date">By <Link className="text-primary" href="/author">Agnes</Link></span>
                    </div>
                </div>
            </article>
        </>
    )
}
