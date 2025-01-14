import React from 'react'

function Cards({item}) {
    console.log(item);  
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={item.url}
                        className="w-48 h-48 object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    
                </div>
            </div>

        </div>
    )
}

export default Cards