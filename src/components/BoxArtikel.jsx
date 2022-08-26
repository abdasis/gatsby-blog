import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { RiBookmark2Line, RiBookmark3Line, RiBookmarkFill, RiBookMarkFill, RiBookmarkLine, RiChat1Line, RiEye2Line, RiUser2Line } from 'react-icons/ri';
import "./BoxArtikel.css";

export default function BoxArtikel(props) {
    return (

        <>
            <div className="card border rounded-3 box-artikel">
                <StaticImage
                    src="../images/gatsby-astronaut.png"
                    width={300}
                    quality={95}
                    formats={["AUTO", "WEBP"]}
                    alt="A Gatsby astronaut"
                    className="img-fluid rounded-3 featured-image"
                />
                <div className="card-body">
                    <h5 className="judul-artikel">Meningkatkan Kualitas Tanah</h5>
                    <p className="content-artikel">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </p>
                    <div className="meta-artikel d-flex justify-content-between">
                        <div className="info-di-kiri d-flex gap-3 flex-grow-1">
                            <div className="comment-box d-flex align-items-center gap-2">
                                <RiChat1Line />
                                <span className='comment-count'>45</span>
                            </div>
                            <div className="comment-box d-flex align-items-center gap-2">
                                <RiEye2Line />
                                <span className='comment-count'>1.5K</span>
                            </div>
                        </div>
                        <div className="info-di-kanan">
                            <div className="bookmark-box d-flex align-items-center">
                                <RiBookmarkLine />
                                <div className="bookmark-count">
                                    87
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}