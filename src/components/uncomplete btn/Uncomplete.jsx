import React from 'react'
import css from "./Uncomplete.module.css"

const Uncomplete = ({onClick}) => {
  return (
    <button className={css.uncomplete} onClick={onClick}>
Uncomplete All
    </button>
  )
}

export default Uncomplete