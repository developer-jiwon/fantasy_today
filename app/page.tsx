"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isOrbActive, setIsOrbActive] = useState(false)
  const [showScroll, setShowScroll] = useState(false)
  const [showShockwave, setShowShockwave] = useState(false)
  const [showStarTrails, setShowStarTrails] = useState(false)
  const [showCandles, setShowCandles] = useState(false)
  const [showMoonDecorations, setShowMoonDecorations] = useState(false)
  const [message, setMessage] = useState("The stars align in your favor today.")

  const handleOrbClick = () => {
    if (!isOrbActive) {
      // Generate a random message when activating the orb
      const messages = [
        "The stars align in your favor today.",
        "A new journey awaits beyond the horizon.",
        "Trust your intuition, it will guide you well.",
        "The universe has special plans for you.",
        "Patience will bring unexpected rewards.",
      ]
      setMessage(messages[Math.floor(Math.random() * messages.length)])

      // Show shockwave animation
      setShowShockwave(true)
      setTimeout(() => setShowShockwave(false), 600)

      // Activate the orb
      setIsOrbActive(true)

      // Show the star trails after orb is active
      setTimeout(() => setShowStarTrails(true), 300)

      // Show the candles after star trails
      setTimeout(() => setShowCandles(true), 800)

      // Show moon decorations at the same time as candles
      setTimeout(() => setShowMoonDecorations(true), 800)

      // Show the scroll after 1 second
      setTimeout(() => {
        setShowScroll(true)
      }, 1000)
    } else {
      // Reset everything when clicking again
      setIsOrbActive(false)
      setShowScroll(false)
      setShowStarTrails(false)
      setShowCandles(false)
      setShowMoonDecorations(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center overflow-hidden relative">
      {/* 1. Fullscreen background */}
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/A-5 배경 일러스트.png')] bg-cover bg-center z-0" />

      {/* Moon decorations */}
      <AnimatePresence>
        {showMoonDecorations && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="fixed top-8 left-8 w-32 h-32 z-20 pointer-events-none"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/A-10 달별장식(1).png"
                  alt="Moon Decoration 1"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="fixed top-8 right-8 w-32 h-32 z-20 pointer-events-none"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Image
                  src="/A-10 달별장식(2).png"
                  alt="Moon Decoration 2"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Candles */}
      <AnimatePresence>
        {showCandles && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="fixed bottom-20 left-1/4 transform -translate-x-1/2 w-24 h-48 z-20 pointer-events-none"
            >
              <div className="relative">
                <Image
                  src="/A-9 구슬 옆에 둘 수 있는 마법촛대.png"
                  alt="Magic Candle Left"
                  width={150}
                  height={300}
                  className="w-full h-auto"
                />
                {/* Flickering flame effect */}
                <motion.div
                  className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-300/30 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.2, 0.9, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6, 0.7, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="fixed bottom-20 right-1/4 transform translate-x-1/2 w-24 h-48 z-20 pointer-events-none"
            >
              <div className="relative">
                <Image
                  src="/A-9 구슬 옆에 둘 수 있는 마법촛대.png"
                  alt="Magic Candle Right"
                  width={150}
                  height={300}
                  className="w-full h-auto"
                />
                {/* Flickering flame effect */}
                <motion.div
                  className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-300/30 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.1, 0.95, 1.15, 1],
                    opacity: [0.6, 0.7, 0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Star trails background */}
      <AnimatePresence>
        {showStarTrails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
          >
            <motion.div
              animate={{
                y: [0, 20, 0],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/A-8 배경에서 떠다니는 유성 잔상.png"
                alt="Star Trails"
                fill
                className="object-cover opacity-60"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Sparkles layer */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-10">
        <Image src="/A-6 입자스팽클 요소.png" alt="Sparkles" fill className="object-cover" />
      </div>

      {/* 2. Centered Orb Container */}
      <div className="relative w-[80vw] max-w-[400px] z-20">
        {/* Shockwave effect */}
        <AnimatePresence>
          {showShockwave && (
            <motion.div
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 1.6, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-30 pointer-events-none"
            >
              <Image
                src="/A-7 클릭 시 퍼지는 마법 충격파.png"
                alt="Magic Shockwave"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Initial orb state */}
        <div
          className={`cursor-pointer ${isOrbActive ? "scale-105" : ""} transition-transform duration-300`}
          onClick={handleOrbClick}
        >
          {!isOrbActive ? (
            <Image
              src="/A-1 유리구슬(닫힌상태).png"
              alt="Crystal Orb (Closed)"
              width={400}
              height={400}
              className="w-full h-auto"
              priority
            />
          ) : (
            <Image
              src="/A-2 유리구슬(클릭 시 상태).png"
              alt="Crystal Orb (Active)"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          )}
        </div>

        {/* 3. Scroll overlay */}
        {showScroll && (
          <div
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-30 w-[110%] opacity-0 transition-opacity duration-700"
            style={{ opacity: showScroll ? 1 : 0 }}
          >
            <Image src="/A-3 메시지 배경 쪽지.png" alt="Scroll" width={500} height={300} className="w-full h-auto" />

            {/* 4. Message inside scroll */}
            <div className="absolute inset-0 flex items-center justify-center text-amber-900 text-lg drop-shadow text-center px-8">
              {message}
            </div>
            {showScroll && (
              <button
                onClick={() => {
                  setIsOrbActive(false)
                  setShowScroll(false)
                  setShowStarTrails(false)
                  setShowCandles(false)
                  setShowMoonDecorations(false)
                }}
                className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-900/90 via-purple-800/90 to-pink-800/90 text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 shadow-[0_0_15px_rgba(123,31,162,0.5)]"
              >
                <span className="text-sm font-medium tracking-wide">Consult the Stars Again</span>
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
