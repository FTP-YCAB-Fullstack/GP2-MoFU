import React from 'react'

const Content = ({children}) => {
    return (
        <div className="flex flex-col w-full px-6 md:px-0 md:w-1/2">
            {children}
        </div>
    )
}

export default Content