'use client'

import React, { useEffect, useState } from "react"
import allData from "../../util/data.json"
import BlogCard1 from "./BlogCard1"
import BlogCard2 from "./BlogCard2"
import BlogCard3 from "./BlogCard3"
import Pagination from "./Pagination"
import BlogCard4 from "./BlogCard4"
import BlogCard5 from "./BlogCard5"
import BlogCard6 from "./BlogCard6"
import BlogCard7 from "./BlogCard7"

export default function BlogPost({ style, showPagination, desc, col, showItem, video, formatIcon, latest, showStart, showEnd }) {
    const data = allData.slice(showStart, showEnd)
    let [currentPage, setCurrentPage] = useState(1)
    let showLimit = showItem,
        paginationItem = 4

    let [pagination, setPagination] = useState([])
    let [limit, setLimit] = useState(showLimit)
    let [pages, setPages] = useState(Math.ceil(data.length / limit))

    useEffect(() => {
        cratePagination()
    }, [limit, pages, data.length])

    const cratePagination = () => {
        // set pagination
        let arr = new Array(Math.ceil(data.length / limit))
            .fill()
            .map((_, idx) => idx + 1)

        setPagination(arr)
        setPages(Math.ceil(data.length / limit))
    }

    const startIndex = currentPage * limit - limit
    const endIndex = startIndex + limit
    const getPaginatedProducts = data.slice(startIndex, endIndex)


    let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem
    let end = start + paginationItem
    const getPaginationGroup = pagination.slice(start, end)

    const next = () => {
        setCurrentPage((page) => page + 1)
    }

    const prev = () => {
        setCurrentPage((page) => page - 1)
    }

    const handleActive = (item) => {
        setCurrentPage(item)
    }
    return (
        <>
            {getPaginatedProducts.length === 0 && (
                <h3>No Products Found </h3>
            )}

            {getPaginatedProducts.map((item,i) => (
                <React.Fragment key={i}>
                    {!style && <BlogCard1 item={item} desc={desc} col={col} />}
                    {style === 1 && <BlogCard1 item={item} desc={desc} col={col} />}
                    {style === 2 && <BlogCard2 item={item} desc={desc} col={col} />}
                    {style === 3 && <BlogCard3 item={item} desc={desc} col={col} />}
                    {style === 4 && <BlogCard4 item={item} desc={desc} col={col} />}
                    {style === 5 && <BlogCard5 item={item} desc={desc} col={col} />}
                    {style === 6 && <BlogCard6 item={item} desc={desc} col={col} />}
                    {style === 7 && <BlogCard7 item={item} desc={desc} col={col} />}
                </React.Fragment>
            ))}

            {showPagination &&
                <Pagination
                    getPaginationGroup={
                        getPaginationGroup
                    }
                    currentPage={currentPage}
                    pages={pages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                />
            }
        </>
    )
}