import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <h1>This is the contact page</h1>
        <Link to="/">Home</Link>
        <p>What a send me a message, yo!</p>
      </div>
    </Layout>
  )
}