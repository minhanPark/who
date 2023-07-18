"use client";

import { BsFillTerminalFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <>
      <motion.div
        drag
        dragMomentum={false}
        whileDrag={{ cursor: "grabbing" }}
        style={{
          width: 62,
          height: 62,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BsFillTerminalFill size={60} />
      </motion.div>
    </>
  );
};

export default Page;
