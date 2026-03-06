import React from 'react'

const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-700 bg-bg-light dark:bg-bg-dark">
            
            {/* 
                THE COSMIC MIX 
                A blend of Deep Red, Royal Blue, and subtle Gold. 
            */}

            {/* Deep Muted Red - Soft Corner Glow */}
            <div className="absolute top-[-25%] left-[-15%] w-[90vw] h-[90vw] rounded-full bg-red-900/[0.02] dark:bg-red-900/[0.03] blur-[160px] md:blur-[200px] pointer-events-none" />

            {/* Deep Muted Blue - Opposite Corner */}
            <div className="absolute bottom-[-25%] right-[-15%] w-[90vw] h-[90vw] rounded-full bg-blue-900/[0.02] dark:bg-blue-900/[0.03] blur-[160px] md:blur-[200px] pointer-events-none" />

            {/* Soft Champagne Center - Warm neutral light - Keeping this as requested */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vw] rounded-full bg-[#B89B72]/[0.02] dark:bg-[#B89B72]/[0.02] blur-[140px] pointer-events-none" />

            {/* Smooth Vignette for deep immersion */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.02] via-transparent to-red-500/[0.02] pointer-events-none" />

        </div>
    )
}

export default Background
