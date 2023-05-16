import React from 'react'

interface CardProps{
children: React.ReactNode;
className?: string;
}

const Card:React.FC<CardProps> = ({children, className = ''}) => {
  return (
    <div className={`p-4 ${className && className} bg-gray-700 rounded-lg shadow-xl`}>
        {children}
    </div>
  )
}

export default Card