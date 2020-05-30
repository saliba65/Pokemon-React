import React from "react";

export default function NavBar({gotNextPage, gotPrevPage}) {
  return (
    <div>
      {gotPrevPage && <button onClick={gotPrevPage}>Previous</button>}
      {gotNextPage && <button onClick={gotNextPage}>Next</button>}
    </div>
  )
}