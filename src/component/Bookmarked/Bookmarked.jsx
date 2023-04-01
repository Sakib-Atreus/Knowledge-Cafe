// Import all file
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// Start Bookmark Part
const Bookmarked = ({ readTime, bookmarkPosts, resetSpentTime }) => {

    return (
        <div className='relative'>
            <div className='sticky top-7'>
                <div className='flex items-center gap-5 justify-center bg-purple-light p-5 border-2 border-skyblue rounded-lg'>
                    <h5 className='text-center font-black text-skyblue text-2xl'>Spent time on read : {readTime} min </h5>
                    
                    {/* Start FontAwesomeIcon Function*/}
                    <FontAwesomeIcon onClick={() => resetSpentTime()} className='cursor-pointer bg-teal p-3 rounded-lg text-white'
                        icon={faTrash}
                    ></FontAwesomeIcon>
                    {/* End FontAwesomeIcon Function */}

                </div>

                <div className='bg-teal p-5 md:p-8 my-3 md:my-6 rounded-lg'>
                    <h5 className='text-skyblue text-2xl font-bold '>Bookmarked Blogs : {bookmarkPosts.length}</h5>

                    {/* Start BookmarksPosts Handler */}
                    {
                        bookmarkPosts.map(post => <BookmarkedSinglePost
                            key={post.id}
                            title={post.title}
                        ></BookmarkedSinglePost>)
                    }
                    {/* End BookmarksPosts Handler */}

                </div>
            </div>
        </div>
    );
    // End the return function
};

// Start the Bookmarked Single Post Function
const BookmarkedSinglePost = ({ title }) => {

    return (
        <h6 className='text-lg font-bold bg-white p-5 my-4 rounded-lg'>{title}</h6>
    )
}
// End the Bookmarked Single Post Function

export default Bookmarked;
// Export file and using on other file by using import