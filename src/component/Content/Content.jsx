// Import all file
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';

// Import toast 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// Start Content Part
const Content = () => {

    // load json data from fake data
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('fakeData.json')
            const data = await res.json()
            setPosts(data);
            // console.log(data);
        }
        loadData()
    }, [])

    // implement Total read time EVENT Handler 
    const spendTime = localStorage.getItem('spend-time')
    const [readTime, setReadTime] = useState(spendTime)


    // console.log(data);

    // Total readTime function start
    const totalReadTime = (id) => {

        const postReadTime = posts.find(post => post.id == id)

        if (!spendTime) {
            localStorage.setItem('spend-time', postReadTime.readTime)
            setReadTime(postReadTime.readTime)
        }
        else {
            localStorage.setItem('spend-time', +spendTime + postReadTime.readTime)
            setReadTime(+spendTime + postReadTime.readTime)
        }
        console.log(spendTime, id);
    }
    // Total readTime function end


    // Start function resetSpentTime
    const resetSpentTime = () => {
        localStorage.setItem('spend-time', 0)
        setReadTime(0)
    }
    // Start function resetSpentTime


    // Define handling bookmarks and toast notification
    const [bookmarkPosts, setBookmarkPosts] = useState([])
    const [showToast, setShowToast] = useState(false);

    // Start bookMarkHandler function
    const bookMarkHandler = (id) => {

        const singlePost = posts.find(post => post.id == id)
        if (bookmarkPosts.length < 1) {
            setBookmarkPosts([...bookmarkPosts, singlePost])
        }
        else {

            const checkDuplicateData = bookmarkPosts.find(post => post.id == id)
            if (!checkDuplicateData) {
                setBookmarkPosts([...bookmarkPosts, singlePost])
            } else {
                toast.error('You Have Already Bookmarked This Blog');
            }
            setShowToast(true)
        }
    }
    // End bookMarkHandler function

    return (
        <>
            <section className='grid md:grid-cols-3 gap-5 mx-2 my-3'>

                {/* Display All Posts or Blog Component*/}
                <div className='md:col-span-2'>
                    {
                        posts.map(post => <Blog
                            key={post.id}
                            post={post}
                            totalReadTime={totalReadTime}
                            resetSpentTime={resetSpentTime}
                            bookMarkHandler={bookMarkHandler}
                            bookmarkPosts={bookmarkPosts}
                            showToast={showToast}
                        ></Blog>)
                    }
                </div>

                {/*Bookmarked Side bar Component */}
                <Bookmarked
                    readTime={readTime}
                    bookmarkPosts={bookmarkPosts}
                    resetSpentTime={resetSpentTime}
                ></Bookmarked>
            </section>
            {/* Section end */}
        </>
    );
};
// End of function

export default Content;
// Export file and using on other file by using import