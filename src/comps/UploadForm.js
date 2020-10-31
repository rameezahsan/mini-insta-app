import React, { useState } from 'react';
import ProgressBar from '../comps/ProgressBar';
import { motion } from 'framer-motion';

const UploadForm = () => {
  const [file, SetFile] = useState(null);
  const [error, SetError] = useState(null);
  const types = ['image/png', 'image/jpeg'];

  const HandleChange = (e) => {
    let uploadedFile = e.target.files[0];

    if (uploadedFile && types.includes(uploadedFile.type)) {
      SetFile(uploadedFile);
      SetError(null);
    } else {
      SetFile(null);
      SetError('please select an image file(PNG or JPEG)');
    }
  };

  return (
    <form>
      <motion.label
        whileHover={{ opacity: 0.6 }}
        transition={{ delay: 1 }}
        animate={{ opacity: 1 }}
      >
        <input type='file' onChange={HandleChange} />
        <span>+</span>
      </motion.label>
      <div className='output'>
        {error && <div className='error'>{error} </div>}
        {file && <div> {file.name}</div>}
        {file && <ProgressBar file={file} SetFile={SetFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
