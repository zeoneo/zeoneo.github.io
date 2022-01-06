import React from "react"
import { Link } from "gatsby"

const Tags = ({ children }) =>
  children && (
    <ul style={{ marginBottom: 0, marginLeft: 0, display: "inline-flex" }}>
      {children.map(t => (
        <Link to={`/tags/${t.toLowerCase()}`} style={{ boxShadow: 'none' }}><li
          key={t}
          style={{
            borderRadius: `4px`,
            border: `1px solid grey`,
            padding: `2px 6px`,
            marginRight: `5px`,
            fontSize: `80%`,
            backgroundColor: "#007acc",
            boxShadow: '0 1px 0 0 transparent !important',
            color: "white",
            listStyle: "none",
          }}
        >
            {t.toLowerCase()}
        </li></Link>
      ))}
    </ul>
  )

export default Tags