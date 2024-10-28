import React from 'react';

// Define the JobListingCard component, which takes `job`, `selectedTags`, and `setSelectedTags` as props.
const JobListingCard = ({ job, selectedTags, setSelectedTags }) => {

    // Combine the job properties into two arrays: details and tags.
    const combinedArrays = [
        job.postedAt,  
        job.contract,   
        job.location, 
        job.role,      
        job.level,      
        ...job.languages, 
        ...job.tools,     
    ];

    // Split the combined array: first 3 elements as job details, rest as tags.
    const jobDetails = combinedArrays.slice(0, 3);
    const jobTags = combinedArrays.slice(3);

    const handleTagClick = (tag) => {
        // Check if the tag is already in the list of selectedTags
        if (selectedTags.includes(tag)) {
             // If the tag is found (already selected), remove it from the list.
             // Use filter to create a new array that excludes the clicked tag.
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        // If the tag is not found and the current number of selectedTags is less than 5,
        } else if (selectedTags.length < 5) {
            // add the clicked tag to the list of selected tags.
            // Use spread syntax to add the new tag to the existing array of selectedTags.
            setSelectedTags([...selectedTags, tag]);
        }
    }

    return (
        <div key={job.id} className='bg-white flex flex-col md:flex-row md:gap-6 md:w-[1100px] md:h-[200px] text-fontFamily text-bodyFontSize relative mt-[3rem] rounded-lg hover:border-l-8 hover:border-primary p-6 w-[330px] h-[330px] shadow-customBoxShadow cursor-pointer'>
            
            {/* Job company logo */}
            <img src={job.logo} alt={job.alt} className='absolute -top-5 left-6 w-[50px] h-[50px] md:w-[120px] md:h-[120px] md:relative md:top-6' />

            <div className='flex flex-col md:flex-1 md:ml-5'>
                {/* Company and tags like NEW or FEATURED */}
                <div className='flex mt-8 md:mr-5'>
                    <span className='text-primary font-bold mr-3'>{job.company}</span>
                    {job.new && (
                        <span className='text-bgColor bg-primary font-bold text-sm rounded-full flex items-center justify-center w-16 h-8 mr-2'>
                            NEW!
                        </span>
                    )}
                    {job.featured && (
                        <span className='text-bgColor bg-veryDarkGrayishCyan font-bold text-sm rounded-full flex items-center justify-center w-24 h-8'>
                            FEATURED
                        </span>
                    )}
                </div>
                <h2 className='font-bold mt-3 hover:text-primary'>{job.position}</h2>
                {/* Job details like posted date, contract type, and location */}
                <div className='flex'>
                    {jobDetails.map((detail, index) => (
                        <span className='text-darkGrayishCyan mt-3' key={index}>
                            {detail}
                            <span className='text-darkGrayishCyan px-1'>&#8226;</span>
                        </span>
                    ))}
                </div>
            </div>
            <hr className='mt-4 text-black' />
            {/* Job tags (clickable) */}
            <div className='flex flex-wrap md:items-center'>
                {jobTags.map((tag, index) => (
                    <span 
                        className={`p-2 font-bold mr-2 mt-4 md:h-[40px] cursor-pointer ${selectedTags.includes(tag) ? 'bg-primary text-white' : 'bg-filterTablets text-primary'}`} 
                        key={index}
                        // Handle tag click
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default JobListingCard;
