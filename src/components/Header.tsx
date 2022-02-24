import '../styles/header.scss'
import { useState, useEffect } from 'React'

export function Header() {
  return (
    <header className="header">
      <div>
        <img src="/logo.svg" alt="to.do"/>
      </div>
    </header>
  )
}