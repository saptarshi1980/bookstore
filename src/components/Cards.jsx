import React from 'react'

function Cards({ item }) {
    console.log(item);
    

    return (
        <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                    <img
                        src={item.image}
                        className="w-48 h-48 object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Rs {item.price}</div>
                        <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                            Buy Now
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Cards