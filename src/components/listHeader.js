import * as React from "react"
import { Link } from "gatsby"

const ListHeader = () => {
    return (
        <aside className="listHeader">
            {/* <h1 className="listHeader-title"></h1> */}
            <div className="listHeader-subtitle">
                Thoughts, ideas and musings
            </div>

            <nav className="listHeader-nav">
                <ul>
                    {/* <li><Link to="/posts">Latest</Link></li> */}
                </ul>
            </nav>
        </aside>
    )
}

export default ListHeader
