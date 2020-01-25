import React from 'react';

function Timeline() {
  return (
    <div>
      <section className='colorlib-experience' data-section='timeline'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>highlights</span>
              <h2 className='colorlib-heading animate-box'>Timeline</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='timeline-centered'>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon color-6'>
                      <i className='icon-pen2' />
                    </div>
                    <div className='timeline-label'>
                      <h2>Flutter Course - Under Development</h2>
                      <p>Currently under devlopment, the course will cover:</p>
                      <ul>
                        <li>Widget Creation</li>
                        <li>Stateless vs Stateful Widgets</li>
                        <li>Async actions using Futures</li>
                        <li>The BLOC pattern</li>
                        <li>Local storage using SQLite</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon color-3'>
                      <i className='icon-pen2' />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        CTM | <em>Software Engineer</em>{' '}
                        <span>May 2018 - Present</span>
                      </h2>
                      <ul>
                        <li>
                          Created a React based Monitoring System to monitor
                          sales of multiple product lines across multiple
                          banking sites in real time using web sockets, node.js,
                          and MongoDB.
                        </li>
                        <li>
                          Refactored legacy code from Laravel blade to React,
                          using modern React features such as React Hooks,
                          Context and Styled Components across multiple banking
                          platforms.
                        </li>
                        <li>
                          Created a React calendar for selecting flights using
                          business requirements to selectively render flight
                          options for departure and return limited to specify
                          days of the week, while displaying pricing in multiple
                          currencies.
                        </li>
                        <li>
                          Team lead on several initiatives for one of the
                          largest banks in the country with over 29 million
                          users.
                        </li>
                        <li>
                          Added reusable React components for common tasks to
                          internal library.
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInTop'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon color-4'>
                      <i className='icon-pen2' />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        ASAP Labs | <em>Software Engineer </em>
                        <span>Oct 2016 - May 2018</span>
                      </h2>
                      <ul>
                        <li>
                          Created a suite of productivity apps using the React ,
                          rendered an initial state consisting of a digital
                          clock, company logo, and App selection grid.
                        </li>
                        <li>
                          Created an implementation of the project using React
                          Native for Android to create a seamless experience
                          across platforms.{' '}
                        </li>
                        <li>
                          Created a React component to render live data to the
                          weather thumbnail of the app selection grid, opening
                          of the weather app caused a re-render with a new
                          enlarged React component showing a 4 day forecast.
                        </li>
                        <li>
                          Created a React component to keep track of tasks.
                          Create, Read, Update , and Delete operations were
                          performed using MongoDB and Node.
                        </li>
                        <li>
                          Integrated the open source Home Assistant (HASS) Home
                          Automation system to work with modules inside of Home
                          Reactor.
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon color-5'>
                      <i className='icon-pen2' />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        Sun and Sea Services | <em>Web Developer </em>
                        <span> Oct 2003 - Oct 2016</span>
                      </h2>
                      <ul>
                        <li>
                          Constructed a multi-page interactive website to meet
                          design specifications including Customer Sign Up,
                          Appointment scheduling, and Payment History.
                        </li>
                        <li>
                          Implemented CSS Media queries to make site responsive
                          and consistent across a variety of viewport and device
                          sizes.
                        </li>
                        <li>
                          Implemented a SQL database to keep track of customer
                          service appointments, pool equipment installations,
                          service records, customer invoices, and customer
                          login.
                        </li>
                        <li>Implemented customer authentication with Oauth.</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article
                  className='timeline-entry begin animate-box'
                  data-animate-effect='fadeInBottom'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon color-none'></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
