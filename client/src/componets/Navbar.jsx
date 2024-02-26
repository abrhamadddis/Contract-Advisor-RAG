import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <svg width="114" height="40" viewBox="0 0 114 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.82862 27.4869C3.37929 27.4869 0.583008 24.0207 0.583008 19.7458C0.583008 15.4708 3.37929 12.0046 6.82862 12.0046V27.4869Z" fill="#8A21C4"></path><path d="M10.8403 39.2787V0.212769C10.8403 0.212769 24.985 1.05892 29.6049 6.61501C29.6049 16.0281 30.0878 30.7118 10.8403 39.2787Z" fill="#25A7FF"></path><path d="M41.8965 27.2106V7.52662H38.1304V30.7623H51.51V27.2106H41.8965Z" fill="#0E1013"></path><path d="M54.9836 10.0825H58.7497V6.26526H54.9836V10.0825ZM55.0497 30.7623H58.7167V12.8376H55.0497V30.7623Z" fill="#0E1013"></path><path d="M68.0024 27.3765L76.5918 13.4019V12.8376H62.9479V16.2234H70.9426L62.2871 30.2976V30.7623H76.5918V27.3765H68.0024Z" fill="#0E1013"></path><path d="M84.4133 27.3765L93.0026 13.4019V12.8376H79.3587V16.2234H87.3535L78.698 30.2976V30.7623H93.0026V27.3765H84.4133Z" fill="#0E1013"></path><path d="M109.678 12.8376L104.359 25.3517L98.6768 12.8376H94.7125L102.476 29.4677L102.08 30.3308C100.758 33.1855 100.031 33.8825 97.6857 33.8825H96.133V37.2019H97.95C101.584 37.2019 103.368 35.6086 105.383 31.0942L113.576 12.8376H109.678Z" fill="#0E1013"></path></svg>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/upload">
                Upload
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;