import React from 'react'
import "./Sidebar.css"

interface Props {
    children: string,
}

const Sidebar:React.FC<Props> = ({children}) => {
  return (
    <div className='sidebar-content'>{children}</div>
        )
}

export default Sidebar