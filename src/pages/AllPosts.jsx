import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/configuration"
import { Container, PostCard } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import "../components/PostCard.css"

const AllPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        })
        console.log("posts", posts);
    }, []);


    return (
        <div className='w-full py-8'>
            <Container>
                    <div className="flex flex-wrap ">
                        {posts?.map((post) => (
                            <div key={post?.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
            </Container>
        </div>
    )
}

export default AllPosts
