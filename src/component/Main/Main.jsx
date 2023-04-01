// Import all file
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';
import './Main.css'

// Start Header Part
const Main = () => {
    // using fetch for collecting data in json file
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('fakeData.json')
            const data = await res.json()
            setPosts(data);
        }
        loadData()
    }, [])
    // data fetching end

    // define useState function
    const [readTime, setReadTime] = useState(0)
    const totalReadTime = (id) => {
        let spendTime = readTime
        for(const post of posts){
            if(post.id == id){
                spendTime = spendTime + post.readTime
                setReadTime(spendTime)
            }
        }
    }

    // useState function
    const [bookmarkPosts, setBookmarkPosts] = useState([])

    // Start BookMark handler function
    const bookMarkHandler = (id) => {
        const singlePost = posts.find(post => post.id == id)
        if(bookmarkPosts.length < 1){
            setBookmarkPosts([...bookmarkPosts, singlePost])
        }
        else {
            const checkDuplicateData = bookmarkPosts.find(post => post.id == id)
            if(!checkDuplicateData) {
                setBookmarkPosts([...bookmarkPosts, singlePost])
            } else {
                alert('already have')
            }
        }
    }
    return (
        <main >
            <section className='grid md:grid-cols-3 gap-5 mx-2 md:mx-0 my-3'>
                <div className='md:col-span-2'>
                    {/* using map for using all data of json file */}
                    {
                        posts.map(post => <Blog
                            key={post.id}
                            post={post}
                            totalReadTime={totalReadTime}
                            bookMarkHandler={bookMarkHandler}
                        ></Blog>)
                    }
                </div>
                {/* Bookmarked Posts and Read Times */}
                <Bookmarked
                    readTime={readTime}
                    bookmarkPosts={bookmarkPosts}
                ></Bookmarked>
            </section>
        </main>
    );
};
// End of function

export default Main;
// Export file and using on other file by using import