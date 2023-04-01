// Import all file
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { ToastContainer } from 'react-toastify';
import saveBookmarksIcon from '../../utilities'

// Start Blog Part
const Blog = (props) => {

    // Define json file data
    const { firstName, lastName, title, tags, image, thumbnail, readTime, id, postDate } = props.post
    const { bookMarkHandler, totalReadTime, showToast, bookmarkPosts } = props

    // Event handler added for check bookmarks
    const checkBookmarksIcon = bookmarkPosts.find(post => id == post.id)

    return (
        <>
            <div>
                <img className='rounded-lg w-full' src={thumbnail} alt="thumbnail" />
                <div className='flex justify-between items-center pt-5'>
                    <div className='flex items-center'>
                        <img className='w-[15%] rounded-full mr-3 ' src={image} alt="author-pic" />
                        <div>
                            <h3 className='font-bold'>{firstName + ' ' + lastName}</h3>
                            <p>{postDate}</p>
                        </div>
                    </div>
                    <div>0{readTime} min read
                    {/* Start FontAwesomeIcon Function*/}
                        <FontAwesomeIcon onClick={() => bookMarkHandler(id)} className='ml-2 cursor-pointer'
                            icon={
                                !checkBookmarksIcon ? faBookmark : saveBookmarksIcon
                            }
                        ></FontAwesomeIcon>
                    {/* End FontAwesomeIcon Function */}

                        {/* Start Toast Notification */}
                        {showToast && (
                            <ToastContainer
                                position="top-right"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="colored"
                            />
                        )}
                        {/* End Toad Notification */}
                    </div>
                </div>
                <h1 className='text-3xl font-bold md:w-[70%] py-5'>{title}</h1>
                <p className=''>
                    {
                        tags.map(tag => `#${tag} `)
                    }
                </p>

                {/* Start button handler for read time blog */}
                <a onClick={() => totalReadTime(id)} className='underline underline-offset-4 text-skyblue font-bold cursor-pointer' >Mark as read</a>
                <hr className='opacity-10 my-8' />
                {/* End button handler for read time blog */}
            </div>
        </>
    );
    // return function closed
};

export default Blog;
// Export file and using on other file by using import