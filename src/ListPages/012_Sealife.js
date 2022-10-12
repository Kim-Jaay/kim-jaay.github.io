import React from 'react'
import LIST from '../data/List.js'

const Sealife = () => {
    return (
        <div className="inner">
            {
                LIST.map((it, idx) => {
                    return (
                        <figure>
                            <h2>{it.title}</h2>
                            <p>{it.tools}</p>
                        </figure>
                    )
                })
                    .slice(11)
            }
        </div>
    )
}

export default Sealife