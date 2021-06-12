import React from 'react';
import img1 from '../images/blog.png';
import img2 from '../images/blog1.png';
import img3 from '../images/blog2.png';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const BlogData = [
    {
        title: 'See what mistakes to avoid when you start a business.',
        image: img1
    },
    {
        title: 'How many entrepreneurs starts a business when was 20.',
        image: img2
    },
    {
        title: 'What entrepreneurs say about the business mistakes.',
        image: img3
    }
]
const Blog = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12 text-center mt-5">
                    <h3>Our Latest News</h3>
                    <p>We are provide our best services.We are also working on customer satisfaction and update our system to take our customer feedback</p>
                </div>
                {
                    BlogData.map(data =>
                        <Slide left>
                        <div className="col-md-6 col-lg-4">
                            <div class="card my-5">
                                <img src={data.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h6><Link to='/'>{data.title}</Link></h6>
                                    <a href="#" class="">Read more</a>
                                </div>
                            </div>
                        </div>
                        </Slide>
                    )
                }
            </div>
        </div>
    );
};

export default Blog;