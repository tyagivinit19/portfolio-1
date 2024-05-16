import { TbBrandLaravel } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri"
// import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
// import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiNginx } from "react-icons/si";

import { motion } from 'framer-motion'

const iconMotion = (duration) => {
    duration = 0; //
    return {
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        },

    }
}

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconMotion(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col justify-center items-center">
                    <div className="flex-grow flex flex-col justify-center items-center w-24">
                        <TbBrandLaravel className="text-7xl text-red-600" />
                        <span className="text-neutral-300">Laravel</span>
                    </div>
                </motion.div>
                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col justify-center items-center">
                    <div className="flex-grow flex flex-col justify-center items-center w-24">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                        <span className="text-neutral-300">React</span>
                    </div>
                </motion.div>
                {/* <motion.div
                    variants={iconMotion(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl" />
                </motion.div> */}
                <motion.div
                    variants={iconMotion(7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col justify-center items-center">
                    <div className="flex-grow flex flex-col justify-center items-center w-24">
                        <SiMongodb className="text-7xl text-green-500" />
                        <span className="text-neutral-300">MongoDB</span>
                    </div>
                </motion.div>
                <motion.div
                    variants={iconMotion(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col justify-center items-center">
                    <div className="flex-grow flex flex-col justify-center items-center w-24">
                        <DiRedis className="text-7xl text-red-700" />
                        <span className="text-neutral-300">Redis</span>
                    </div>
                </motion.div>
                <motion.div
                    variants={iconMotion(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col justify-center items-center">
                    <div className="flex-grow flex flex-col justify-center items-center w-24">
                        <FaNodeJs className="text-7xl text-green-500" />
                        <span className="text-neutral-300">NodeJS</span>
                    </div>
                </motion.div>
                {/* <motion.div
                    variants={iconMotion(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div> */}
                <motion.div
                    variants={iconMotion(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col justify-center items-center">
                    <div className="flex-grow flex flex-col justify-center items-center w-24">
                        <SiMysql className="text-7xl text-sky-700" />
                        <span className="text-neutral-300">MySQL</span>
                    </div>
                </motion.div>
                <motion.div
                    variants={iconMotion(4.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col justify-center items-center">
                    <div className="flex-grow flex flex-col justify-center items-center w-24">
                        <FaAws className="text-7xl text-amber-500" />
                        <span className="text-neutral-300">AWS</span>
                    </div>
                </motion.div>
                <motion.div
                    variants={iconMotion(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col justify-center items-center">
                    <div className="flex-grow flex flex-col justify-center items-center w-24">
                        <FaDocker className="text-7xl text-blue-500" />
                        <span className="text-neutral-300">Docker</span>
                    </div>
                </motion.div>
                <motion.div
                    variants={iconMotion(5.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col justify-center items-center">
                    <div className="flex-grow flex flex-col justify-center items-center w-24">
                        <SiNginx className="text-7xl text-green-600" />
                        <span className="text-neutral-300">Nginx</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies