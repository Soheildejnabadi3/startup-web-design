import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <section className="flex h-screen justify-center items-center">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold">Welcome to our Dark Startup</h1>
        <p className="text-2xl">Your innovative idea starts here.</p>
      </motion.div>
    </section>
  );
};

export default HeroBanner;