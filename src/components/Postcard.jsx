// import React from 'react'
// import appwriteService from "../appwrite/configuration"
// import { Link } from 'react-router-dom'

// // $id is the syntax of appwrite
// export default function Postcard({ $id, title, featuredImage }) {
//     return (
//         <Link to={`/post/${$id}`}>
//             <div className="bg-gray-700 p-4 rounded-xl w-full">
//                 <div className="justify-center mb-4 w-full">
//                 </div>
//             </div>
//         </Link>
//     )
// }





// import React from 'react';
// import appwriteService from "../appwrite/configuration"
// import { Link } from 'react-router-dom'
// import "../components/PostCard.css"

// const PostCard = ({ $id, title, featuredImage }) => {
//     return (
//         <Link to={`/post/${$id}`}>
//             <div className="main-card">
//                 <div className="card">
//                     <div className="card_load">
//                         <img src={appwriteService.getFilePreview(featuredImage)} className='rounded-xl w-[100%]' />
//                     </div>
//                     <div className="card_load_extreme_title" >
//                         <h2 className='font-bold text-gray-50 text-xl'>{title}</h2>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// }

// export default PostCard;


import React from 'react';
import appwriteService from "../appwrite/configuration"
import { Link } from 'react-router-dom'
import "../components/PostCard.css"

const PostCard = ({ $id, title, featuredImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className="box">
                <div className="w-[100%] content">
                    <div className='flex justify-center items-center w-[100%] flex-col'>
                        <img src={appwriteService.getFilePreview(featuredImage)} className='w-[100%] h-[100%]' />
                        <h2 className='pl-3 pt-2 font-bold text-xl' style={{color:"black"}}>{title}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;