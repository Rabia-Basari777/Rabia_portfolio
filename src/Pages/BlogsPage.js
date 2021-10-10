import React from 'react';
import Title from '../Components/Title'
import blog7 from "../images/blog7.jpg";
import blog6 from "../images/blog6.jpg";
import blog4 from "../images/blog4.jpg";
import blog5 from "../images/blog5.png";

function BlogsPage() {
    return (
        <div>
            <div className="b-title">
                <Title title={'My Blogs'} span={'My Blogs'} />
            </div>
            <p className="b-text">You can have a look at the blog posts I have written describing my projects and the experiences I had during my projects</p>
            <div className="BlogsPage">
                <div className="blog" style={{marginRight: "30px"}}>
                    <div className="blog-content">
                        <img height="250px" width="250px" src={blog7} alt="" />
                        <p class="blog-title">Nordstrom Clone</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-content">
                        <img height="250px" width="250px" src={blog6} alt="" />
                        <p class="blog-title">EaseMyTrip Clone</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default BlogsPage
