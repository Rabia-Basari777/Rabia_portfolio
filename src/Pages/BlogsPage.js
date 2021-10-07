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
            <div className="BlogsPage">
                <div className="blog">
                    <div className="blog-content">
                        <img height="250px" width="250px" src={blog7} alt="" />
                        <p class="blog-title">Blog 1</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-content">
                        <img height="250px" width="250px" src={blog6} alt="" />
                        <p class="blog-title">Blog 2</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-content">
                        <img height="250px" width="250px" src={blog4} alt="" />
                        <p class="blog-title">Blog 3</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default BlogsPage
