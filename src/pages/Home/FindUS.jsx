import React from 'react';

const FindUS = () => {
  return (
    <div className="w-full h-screen  flex flex-col gap-4 items-center justify-center">
      <h1 className='text-4xl font-serif text'>Where to find us?</h1>
      <div className="w-full h-[80vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.970370558806!2d-77.05189942477642!3d38.90179287172314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7b1476d8c6d%3A0x4e390fbc2a9bbfc6!2s2200%20Pennsylvania%20Ave%20NW%204th%20fl%2C%20Washington%2C%20DC%2020037%2C%20USA!5e0!3m2!1sen!2s!4v1753033479663!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default FindUS;
