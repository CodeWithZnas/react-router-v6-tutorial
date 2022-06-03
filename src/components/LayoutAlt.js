import React from 'react'

// export default function LayoutAlt(props) {
export default function LayoutAlt({title, children}) {
  return (
    <>
        <header>
            Alternative Header Section === {title}
        </header>
        <main>
            Alternative Main Section
            {children}
        </main>
        <footer>
            <p>Alternative Footer Section</p>

        </footer>
    </>
  )
}
