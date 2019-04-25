import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.5305692644506!2d28.16447731502629!3d-26.01619068352193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956c36c8c20a07%3A0x7b9870d946be1c78!2s1344%2F40+Burn+Owl+Street%2C+Rabie+Ridge%2C+Midrand%2C+1688!5e0!3m2!1sen!2sza!4v1549673294694"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                title="location"
            ></iframe>
            <div className="location_tag">
               <div>Location</div>
            </div>
        </div>
    );
};

export default Location;