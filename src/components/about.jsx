export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about">
              <h2>About Us</h2>
              <p>Import & Export co.</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Full-Fledged Services</li>
                    <li>Distribution</li>
                    <li>logistics</li>
                    <li>storage & warehouing</li>
                    
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                  <li>Striving for Excellence</li>
                    <li>trade markting</li>
                    <li>merchandising</li>
                    <li>store activities</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
