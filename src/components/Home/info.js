import React from "react"
import { Link } from "gatsby"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Cras mi pede, malesuada in, imperdiet et, commodo vulputate,
              justo. In blandit ultrices enim. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Proin interdum mauris non ligula
              pellentesque ultrices. Phasellus id sapien in sapien iaculis
              congue. Vivamus metus arcu, adipiscing molestie, hendrerit at,
              vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.
              Donec quis orci eget orci vehicula condimentum.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
