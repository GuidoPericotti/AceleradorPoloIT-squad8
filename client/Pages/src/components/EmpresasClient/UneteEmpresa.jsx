import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ongimg from '../../assets/ong.jpg';

export const UneteEmpresa = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.5, 1]);

  return (
    <> <div className='dark:bg-dark-primary bg-[#D8EEE3]'>

        <motion.section
          className="flex justify-center items-center flex-col text-center py-10 "
          style={{ scale }}
        >
          <div>
            <h2 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Únete a nuestra comunidad, sé una parte <br />
              fundamental de la formación <br />
              de los talentos del futuro.
            </h2>
            <p className="text-4xl text-gray-600 dark:text-gray-300 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nunc vulputate libero et velit interdum, ac aliquet odio <br />
              mattis.
            </p>
          </div>
        </motion.section>
        <motion.section
          className="flex justify-center -pt-24"
          style={{ scale }}
        >
          <a href="">
            <img
              src={ongimg}
              alt="Imagen de ejemplo"
              className=" max-w-2xl h-auto rounded-lg"
            />
          </a>
        </motion.section>
    </div>
    </>
  );
};