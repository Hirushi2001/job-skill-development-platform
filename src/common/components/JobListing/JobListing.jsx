import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import cross_icon  from '../../../assets/crosimg.png';
import { jobCategories,jobLocations } from '../../../assets/asset';
import JobCard from '../JobCard/JobCard';
import left_arrow_icon from '../../../assets/arrow.png'

function JobListing() {
    const { isSearched, searchFilter, setSearchFilter,jobs } = useContext(AppContext);
    const [currentPage,setCurrentPage]=useState(1)

    return (
        <div className='container 1xl:px-2 mx-auto flex-col lg:flex-row max-lg:space-y-8 py-14   flex justify-between gap-1 '>
            {/* Sidebar */}
            <div className='w-full lg:w-1/4 bg-white px-4'>
                {/* Search Filter from Hero Component */}
                {isSearched && (searchFilter.title !== "" || searchFilter.location !== '') && (
                    <>
                        <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                        <div className='mb-4 text-gray-600'>
                            {searchFilter.title && (
                                <span className="inline-flex items-center gap-2.5 bg-blue-150 border border-blue-400 px-4 py-1.5 rounded">
                                    {searchFilter.title}
                                    <img 
                                        onClick={() => setSearchFilter(prev => ({ ...prev, title: "" }))} 
                                        className="cursor-pointer w-3 h-3" 
                                        src={cross_icon} 
                                        alt="Remove title filter"
                                    />
                                </span>
                            )}
                            {searchFilter.location && (
                                <span className="inline-flex items-center gap-2.5 bg-red-150 border border-red-400 px-4 py-1.5 rounded ml-2">
                                    {searchFilter.location}
                                    <img 
                                        onClick={() => setSearchFilter(prev => ({ ...prev, location: "" }))} 
                                        className="cursor-pointer w-3 h-3" 
                                        src={cross_icon} 
                                        alt="Remove location filter"
                                    />
                                </span>
                            )}
                        </div>
                    </>
                )}

                {/* Category Filter */}
                <div className='px-20'>
                    <h4 className='font-medium text-lg mb-2'>Search by Categories</h4>
                    <ul className="space-y-2">
                        {jobCategories.map((category, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <input type="checkbox" id={`category-${index}`} name="jobCategory" />
                                <label htmlFor={`category-${index}`} className="text-gray-700">{category}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mt-4.5 px-20' >
                    <h4 className='font-medium text-lg mb-2'>Search by Locations</h4>
                    <ul className="space-y-2">
                        {jobLocations.map((location, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <input type="checkbox" id={`location-${index}`} name="jobLocation" />
                                <label htmlFor={`category-${index}`} className="text-gray-700">{location}</label>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

       {/* job listning */}

       <section className='w-full lg:w-3/4 text-gray-800  max-lg:px-4 ' >
         <h3 className='font-medium  text-3 py-2 id="job-list '>Latest Jobs</h3>
         <p className='mb-8  '>Get your desired job from top companies</p>
        <div className=' grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>

        {jobs.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
            </div>

        {/* pagination */}
        {
            jobs.length>0 && (
                <div>
                    <a href=''>
                        <img src={AuthenticatorAssertionResponse.left_arrow_icon} alt=""/>
                        {Array.from({length:Math.ceil(jobs.length/6)}).map((_,index)=>(
                            <a href='job-list'>

                                <button>{index+1}</button>
                                </a>

                        ))}
                    </a>
                </div>
            )
        }



       </section>


        </div>
    );
}

export default JobListing;
