import React from 'react'

function JobCard({ job }) {
    return (
        <div className="border border-gray-200 p-6 shadow-sm rounded  ">
            <h4 className="font-bold text-xl mb-6 ">{job.title}</h4>
            <div className="flex items-center gap-3 mt-2 text-xs">
                <span className="bg-blue-300 border border-blue-400 px-4 py-1.5 rounded">{job.location}</span>
                <span className="bg-blue-50 border border-blue-400 px-4 py-1.5 rounded">{job.level}</span>
            </div>
            <div>
                <p className="text-gray-500 text-sm mt-4">{job.description}</p>
                <div className="mt-4 flex gap-4 text-sm">
                    <button className="bg-[#05080f] text-white px-2 py-1 rounded">Apply now</button>
                    <button className="text-[#020912] bg-[#f6f7fb] border border-black px-2 py-1 rounded">Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default JobCard
