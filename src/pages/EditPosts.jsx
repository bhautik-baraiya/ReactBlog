import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/configuration"
import { useNavigate, useParams } from 'react-router-dom';

const EditPosts = () => {

    const [posts, setPosts] = useState([]);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (posts) {
                    setPosts(post);
                } else {
                    navigate('/');
                }
            })
        }
    }, [slug, navigate])

    return posts ? (
        <div className="py-8">
            <Container>
                <PostForm post={posts} />
            </Container>
        </div>
    ) : null
}

export default EditPosts
