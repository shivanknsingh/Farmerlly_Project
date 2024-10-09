import React from 'react'
import Card from './Card'

const Cardsgrid = () => {
    return (
        <>
            <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

                    <Card/>
                    <Card/>
                    <Card/>
                    
                </div>
            </div>
        </>
    )
}

export default Cardsgrid