import * as React from "react"
import { RiBookMarkLine } from "react-icons/ri";
import Layout from "../components/App"
import BoxArtikel from "../components/BoxArtikel";
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section>
      <div className="banner p-5">
        <div className="row align-items-center inner-banner">
          <div className="col-md-6">
            <p className="">Halo, Selamat Datang di Blog Saya!</p>
            <h1>Let's Grow up Together</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo repudiandae fugiat vitae debitis deleniti quidem cum, sit beatae atque totam architecto, sint veniam id fugit porro laboriosam ullam provident?</p>
            <button className="btn btn-primary">
              Ikuti Saya!
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </section>
    <section>
      <div className="widget-title">
        <h5 className="d-flex align-items-center gap-1">
          <RiBookMarkLine />
          Tulisan
        </h5>
        <div className="daftar-artikel">
          <div className="row gy-4">
            <div className="col-md-4">
              <BoxArtikel />
            </div>
            <div className="col-md-4">
              <BoxArtikel />
            </div>
            <div className="col-md-4">
              <BoxArtikel />
            </div>
            <div className="col-md-4">
              <BoxArtikel />
            </div>
            <div className="col-md-4">
              <BoxArtikel />
            </div>
            <div className="col-md-4">
              <BoxArtikel />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
