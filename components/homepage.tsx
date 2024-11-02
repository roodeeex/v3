'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Menu, X, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, useAnimate, stagger } from "framer-motion"

export function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    animate("h1", { opacity: 1 }, { duration: 0.01 })
    animate("h1 span", 
      { opacity: 1, y: 0 },
      { duration: 0.5, delay: stagger(0.05) }
    )
  }, [animate])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-transparent'}`}>
        <div className="container mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Company Logo"
              width={50}
              height={50}
              className="w-12 h-12"
              priority
            />
          </Link>
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Partners", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${isScrolled ? 'text-white' : 'text-gray-800'} hover:text-green-400 transition-colors`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button variant="default" className={`hidden md:block ${isScrolled ? 'bg-green-600 hover:bg-green-700' : 'bg-green-700 hover:bg-green-800'} text-white`}>
            Contact Us
          </Button>
          <button
            className={`md:hidden ${isScrolled ? 'text-white' : 'text-gray-800'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="bg-gray-800 h-full w-64 shadow-lg">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center py-6">
            {["Home", "About", "Partners", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-green-400 transition-colors py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button variant="default" className="mt-6 bg-green-600 hover:bg-green-700 text-white">Contact Us</Button>
          </nav>
        </div>
      </div>

      <main className="relative z-20">
        <motion.section
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="home"
          className="relative h-screen flex items-center overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/2758322/2758322-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-8 relative z-10">
            <motion.div
              ref={scope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                <div className="flex flex-col">
                  <div className="overflow-hidden pb-1">
                    {"Delivering".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                  <div className="overflow-hidden mt-2 ml-24 pb-1">
                    {"Freshness".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index + "Delivering".length) * 0.05 }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-xl md:text-2xl mb-10 text-white"
              >
                Global agricultural solutions for a sustainable future
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <Button variant="default" className="bg-green-700 hover:bg-green-800 text-white text-lg px-10 py-4">Learn More</Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          id="about"
          className="py-32 bg-gray-100"
        >
          <div className="container mx-auto px-8">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-center mb-12 text-green-700">About Us</motion.h2>
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 mb-10">
                We are a global leader in agricultural innovation and sustainable farming practices. With a commitment to excellence and cutting-edge technology, we're shaping the future of agriculture on a global scale.
              </p>
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-3">
                Discover Our Impact
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          id="partners"
          className="py-32 bg-white"
        >
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-green-700">Our Global Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  name: "TAMA",
                  description: "Leading agricultural innovator from Egypt",
                  image: "/images/partners/tama.png",
                },
                {
                  name: "SPENA",
                  description: "Sustainable farming solutions from Spain",
                  image: "/images/partners/spena.png",
                },
                {
                  name: "MEDGATEWAY",
                  description: "Agricultural technology experts from Morocco",
                  image: "/images/partners/medgateway.png",
                },
                {
                  name: "GOOD SEED",
                  description: "Premium seed supplier from Egypt",
                  image: "/images/partners/goodseed.png",
                },
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className="overflow-hidden group transition-all duration-300 hover:-translate-y-2">
                    <div className="relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" className="text-white bg-transparent border-white hover:bg-white hover:text-black">
                          Learn More
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-green-700">{partner.name}</CardTitle>
                      <CardDescription>{partner.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="relative py-32"
        style={{ backgroundImage: "url('/images/sections/excellence-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-8 relative z-10">
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <Leaf className="w-16 h-16 text-green-400" />
          </motion.div>
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Global Agricultural Excellence</motion.h3>
          <motion.p variants={fadeInUp} className="text-center text-white text-lg max-w-3xl mx-auto">
            Driving innovation and sustainability in global agriculture, feeding the world responsibly.
          </motion.p>
        </div>
      </motion.section>

      <footer className="bg-gray-800 text-gray-300 py-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <Image
                src="/logo.svg"
                alt="Company Logo"
                width={50}
                height={50}
                className="w-16 h-16 mb-6"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">Quick Links</h4>
              <ul className="space-y-4">
                {["Home", "About", "Partners", "Innovations", "Sustainability", "Investor Relations"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-300 hover:text-green-300 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">Global Headquarters</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>1234 Freshness Plaza, Metropolis, AC 54321</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>info@freshnesscorp.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-green-300 transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-green-300 transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-green-300 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}