import { motion, useScroll, useTransform } from "framer-motion";
import ongimg from '../../assets/ong.jpg';

export const CardEmpresas = ({ titulo }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <div className="dark:bg-dark-primary bg-[#D8EEE3]">

      <motion.section
        className="flex flex-col items-center py-4 space-x-4 rounded-lg border border-gray-300 p-4 max-w-sm mx-auto shadow-lg dark:bg-dark-primary bg-[#D8EEE3]"
        style={{ scale }}
      >
        {/* Imagen más pequeña y dentro del borde */}
        <a href="">
          <img
            src={ongimg}
            alt="Imagen de ejemplo"
            className="w-24 h-24 object-cover rounded-full"
          />
        </a>

        {/* Título y texto más compacto */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white pb-2">
            {titulo}
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a.
          </p>
        </div>
      </motion.section>
    </div>
  );
};