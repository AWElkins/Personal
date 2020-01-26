import React from 'react';

function About() {
  return (
    <div>
      <section className='colorlib-about' data-section='about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div className='col-md-12'>
              <div
                className='row row-bottom-padded-sm animate-box'
                data-animate-effect='fadeInLeft'
              >
                <div className='col-md-12'>
                  <div className='about-desc'>
                    <h2 className='colorlib-heading'>Who Am I?</h2>
                    <p>
                      I am a full time Software Engineer. I enjoy tackling
                      difficult problems and continously learning, while sharing
                      what I have learned with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='colorlib-about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <h2 className='colorlib-heading'>
                Here are some of my expertise
              </h2>
            </div>
          </div>
          <div className='row row-pt-md'>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-1'>
                <span className='icon'>
                  <i className='icon-code-outline' />
                </span>
                <div className='desc'>
                  <h3>Web Development </h3>
                  <p>
                    I have experience building websites and chrome extentions
                    using React, Node, Python, and SCSS
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-3'>
                <span className='icon'>
                  <i className='icon-phone3' />
                </span>
                <div className='desc'>
                  <h3>Mobile Development</h3>
                  <p>
                    I have experience building cross platform mobile apps using
                    Flutter, and React Native.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-5'>
                <span className='icon'>
                  <i className='icon-bulb' />
                </span>
                <div className='desc'>
                  <h3>Teaching</h3>
                  <p>
                    I have taught courses on Web Development, React, and
                    Automation using Python.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
