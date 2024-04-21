import React from 'react'
import css from "./Clear.module.css"

const Clear = ({onClick}) => {
  return (
    <button onClick={onClick} className={css.clear}>
        Clear All
    </button>
  )
}

export default Clear