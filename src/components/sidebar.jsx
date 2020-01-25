import React from 'react';

function Sidebar() {
  return (
    <div>
      <div>
        <nav
          href='#navbar'
          className='js-colorlib-nav-toggle colorlib-nav-toggle'
          data-toggle='collapse'
          data-target='#navbar'
          aria-expanded='false'
          aria-controls='navbar'
        >
          <i />
        </nav>
        <aside id='colorlib-aside' className='border js-fullheight'>
          <div className='text-center'>
            <div
              className='author-img'
              style={{ backgroundImage: 'url(images/about.jpg)' }}
            />
            <h1 id='colorlib-logo'>
              <a href='index.html'>Aaron Elkins</a>
            </h1>
            <span className='email'>
              <a href='mailto:aaron.wayne.elkins@gmail.com'>
                <i className='icon-mail'></i>Aaron.Wayne.Elkins@gmail.com
              </a>
            </span>
          </div>
          <nav id='colorlib-main-menu' role='navigation' className='navbar'>
            <div id='navbar' className='collapse'>
              <ul>
                <li className='active'>
                  <a href='#home' data-nav-section='home'>
                    Introduction
                  </a>
                </li>
                <li>
                  <a href='#about' data-nav-section='about'>
                    About
                  </a>
                </li>
                {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                <li>
                  <a href='#timeline' data-nav-section='timeline'>
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id='colorlib-main-menu'>
            <ul>
              <li>
                <a
                  href='https://www.linkedin.com/in/aaron-elkins/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='icon-linkedin2' />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/AWElkins'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='icon-github'></i>
                </a>
              </li>
            </ul>
          </nav>
          <div className='colorlib-footer'>
            {/* <p>
                <small>Something coming soon !!</small>
              </p> */}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
