import React from 'react'
import blog1 from '../../img/blog-1.jpg';
import blog2 from '../../img/blog-2.jpg';
import "./Blog.css"
import { Link } from 'react-router-dom';
export default function Blog() {
  return (
    <div className='maincon1'>
        <div class="container py-5 maincon">
    <div class="row g-5">
        <div class="col-lg-8 column">
            <div class="blog-item mb-5">
                <div class="row g-0 bg-light overflow-hidden">
                    <div class="col-12 col-sm-5 h-100">
                        <img class="img-fluid " src={blog1} />
                    </div>
                    <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="bi bi-bookmarks me-2"></i>Web Design</small>
                                <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h5 class="text-uppercase mb-3">Dolor sit magna rebum clita rebum dolor</h5>
                            <p>Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor</p>
                            <Link class="text-primary text-uppercase" to="/blogdetails">Read More<i class="bi bi-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-item mb-5">
                <div class="row g-0 bg-light overflow-hidden">
                    <div class="col-12 col-sm-5 h-100">
                        <img class="img-fluid h-100" src={blog2} />
                    </div>
                    <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="bi bi-bookmarks me-2"></i>Web Design</small>
                                <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h5 class="text-uppercase mb-3">Dolor sit magna rebum clita rebum dolor</h5>
                            <p>Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor</p>
                            <Link class="text-primary text-uppercase" to="/blogdetails">Read More<i class="bi bi-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-item mb-5">
                <div class="row g-0 bg-light overflow-hidden">
                    <div class="col-12 col-sm-5 h-100">
                        <img class="img-fluid h-100"  src={blog1}  />
                    </div>
                    <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="bi bi-bookmarks me-2"></i>Web Design</small>
                                <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h5 class="text-uppercase mb-3">Dolor sit magna rebum clita rebum dolor</h5>
                            <p>Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor</p>
                            <Link class="text-primary text-uppercase" to="/blogdetails">Read More<i class="bi bi-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-item mb-5">
                <div class="row g-0 bg-light overflow-hidden">
                    <div class="col-12 col-sm-5 h-100">
                        <img class="img-fluid h-100" src={blog2} />
                    </div>
                    <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="bi bi-bookmarks me-2"></i>Web Design</small>
                                <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h5 class="text-uppercase mb-3">Dolor sit magna rebum clita rebum dolor</h5>
                            <p>Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor</p>
                            <Link class="text-primary text-uppercase" to="/blogdetails">Read More<i class="bi bi-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-item mb-5">
                <div class="row g-0 bg-light overflow-hidden">
                    <div class="col-12 col-sm-5 h-100">
                        <img class="img-fluid h-100"  src={blog1}  />
                    </div>
                    <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="bi bi-bookmarks me-2"></i>Web Design</small>
                                <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h5 class="text-uppercase mb-3">Dolor sit magna rebum clita rebum dolor</h5>
                            <p>Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor</p>
                            <Link class="text-primary text-uppercase" to="/blogdetails">Read More<i class="bi bi-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-item mb-5">
                <div class="row g-0 bg-light overflow-hidden">
                    <div class="col-12 col-sm-5 h-100">
                        <img class="img-fluid h-100"  src={blog2}  />
                    </div>
                    <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="bi bi-bookmarks me-2"></i>Web Design</small>
                                <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h5 class="text-uppercase mb-3">Dolor sit magna rebum clita rebum dolor</h5>
                            <p>Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor</p>
                            <Link class="text-primary text-uppercase" to="/blogdetails">Read More<i class="bi bi-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <nav aria-label="Page navigation">
                  <ul class="pagination pagination-lg m-0">
                    <li class="page-item disabled">
                      <a class="page-link rounded-0" href="#" aria-label="Previous">
                        <span aria-hidden="true"><i class="bi bi-arrow-left"></i></span>
                      </a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link rounded-0" href="#" aria-label="Next">
                        <span aria-hidden="true"><i class="bi bi-arrow-right"></i></span>
                      </a>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="mb-5">
                <div class="input-group">
                    <input type="text" class="form-control p-3" placeholder="Keyword"/>
                    <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                </div>
            </div>
            <div class="mb-5">
                <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Categories</h3>
                <div class="d-flex flex-column justify-content-start">
                    <a class="h5 bg-light py-2 px-3 mb-2" href="#"><i class="bi bi-arrow-right me-2"></i>Funny Dogs</a>
                    <a class="h5 bg-light py-2 px-3 mb-2" href="#"><i class="bi bi-arrow-right me-2"></i>Funny Cats</a>
                    <a class="h5 bg-light py-2 px-3 mb-2" href="#"><i class="bi bi-arrow-right me-2"></i>Exotic Fishes</a>
                    <a class="h5 bg-light py-2 px-3 mb-2" href="#"><i class="bi bi-arrow-right me-2"></i>Rare Animals</a>
                </div>
            </div>
            <div class="mb-5 blogimage" >
                <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Recent Post</h3>
                <div class="d-flex overflow-hidden mb-3">
                    <img class="img-fluid"  src={blog1}  alt=""/>
                    <a href="" class="h5 d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                    </a>
                </div>
                
               
                <div class="d-flex overflow-hidden mb-3">
                    <img class="img-fluid"  src={blog2}   alt=""/>
                    <a href="" class="h5 d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                    </a>
                </div>
            </div>
            <div class="mb-5">
                <img  src={blog1}  alt="" class="img-fluid rounded"/>
            </div>

            <div class="mb-5">
                <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Tag Cloud</h3>
                <div class="d-flex flex-wrap m-n1">
                    <a href="" class="btn btn-primary m-1">Design</a>
                    <a href="" class="btn btn-primary m-1">Development</a>
                    <a href="" class="btn btn-primary m-1">Marketing</a>
                    <a href="" class="btn btn-primary m-1">SEO</a>
                    <a href="" class="btn btn-primary m-1">Writing</a>
                    <a href="" class="btn btn-primary m-1">Consulting</a>
                    <a href="" class="btn btn-primary m-1">Design</a>
                    <a href="" class="btn btn-primary m-1">Development</a>
                    <a href="" class="btn btn-primary m-1">Marketing</a>
                    <a href="" class="btn btn-primary m-1">SEO</a>
                    <a href="" class="btn btn-primary m-1">Writing</a>
                    <a href="" class="btn btn-primary m-1">Consulting</a>
                </div>
            </div>
          
            <div>
                <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Plain Text</h3>
                <div class="bg-light text-center matter">
                    <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                    <a href="" class="btn btn-primary py-2 px-4">Read More</a>
                </div>
            </div>
        </div>
      
    </div>
</div>
</div>
  )
}
