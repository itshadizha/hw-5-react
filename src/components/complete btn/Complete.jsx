import React from 'react'
import css from "./complete.module.css"

const Complete = ({onClick}) => {
  return (
    <button className={css.complete} onClick={onClick}>Complete All </button>
  )
}

export default Complete