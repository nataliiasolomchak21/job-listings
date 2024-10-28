import React, { useState } from 'react'; 
import SearchBar from './SearchBar'; 
import JobListingCard from './JobListingCard'; 
import data from '../data.json'; 

const JobListings = () => {
    // State to manage selected tags.
    // `selectedTags` is an array containing the tags selected by the user.
    // `setSelectedTags` is the function used to update `selectedTags`.
    const [selectedTags, setSelectedTags] = useState([])

    // Filter the job listings based on the selected tags.
    const filteredJobs = data.filter(job => {
        // Combine the job's role, level, languages, and tools into a single array.
        const combinedJobs = [
            job.role,
            job.level,
            ...job.languages,
            ...job.tools
        ]

        // Check if all selected tags are present in the `combinedJobs` array.
        // `every()` returns true only if every selected tag is found in `combinedJobs`.
        return selectedTags.every(tag => combinedJobs.includes(tag))
    })
   
    
    return (
        <div className='section -top-4'>
            {/* Render the SearchBar component and pass selectedTags and setSelectedTags as props */}
           <SearchBar selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <div>
                {/* Conditional rendering: if there are filtered jobs, display them; otherwise, show a message */}
                {filteredJobs.length > 0 ? (
                    // Map over the `filteredJobs` array and render a `JobListingCard` for each job.
                    filteredJobs.map(job => (
                        <JobListingCard
                            key={job.id} // Unique key for each job (React optimization)
                            job={job} // Pass the individual job data to the JobListingCard
                            selectedTags={selectedTags}
                            setSelectedTags={setSelectedTags}
                            className='mb-8'/>
                    ))
                ) : (
                    <p>No jobs found for your search</p>
                )}
            </div>
        </div>
    );
};

export default JobListings;
