import React from 'react'

const Content = ({children}) => {
    return (
        <div className="flex flex-col w-1/2 mx-auto py-10">
            {children}
        </div>
    )
}

export default Content
