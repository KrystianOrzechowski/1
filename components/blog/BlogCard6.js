import Link from "next/link"

export default function BlogCard6({ col, desc, item }) {
    return (
        <>
            <article className={`${col ? col : ""}`}>
                <figure className="mb-20">
                    <Link href={`/blog/${item.id}`}><img src={`/assets/imgs/posts/${item.img}`} alt="athena" /></Link>
                </figure>
                <div className="post-meta mb-10 font-primary text-uppercase">
                    <span><Link href="/category">Decor</Link></span>
                </div>
                <h5 className="post-title">
                    <Link href={`/blog/${item.id}`}>{item.title.rendered}</Link>
                </h5>
            </article>
        </>
    )
}
