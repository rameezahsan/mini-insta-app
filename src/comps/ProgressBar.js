import React from 'react';
import useStorage from '../hooks/useStorage';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, SetFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress + '% ', url);

  useEffect(() => {
    if (url) {
      SetFile(null);
    }
  }, [url, SetFile]);

  return (
    <motion.div
      className='progress-bar'
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
};

export default ProgressBar;
