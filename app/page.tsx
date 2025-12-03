'use client';

import Link from 'next/link';
import { Heart, Map, Calendar, TrendingUp, Phone, Siren, Activity, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Minimalist & Accessible */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Glass Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-12 text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl sm:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
              Your Health, Connected.
            </h1>
            <p className="text-2xl text-slate-600 font-medium">
              Your personal care package.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Heart Health - Activity Icon */}
          <motion.div variants={itemVariants} className="h-full">
            <Link href="/cvd" className="group block h-full">
              <div className="h-full bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-10 hover:border-sky-500 hover:shadow-xl shadow-lg shadow-sky-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="flex flex-col items-center text-center space-y-6 flex-1">
                  <div className="w-20 h-20 bg-sky-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Activity className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Heart Health</h3>
                    <p className="text-slate-700">
                      Assess your cardiovascular risk with our advanced calculator
                    </p>
                  </div>
                  <div className="w-full pt-4 border-t border-blue-100">
                    <span className="text-sky-500 font-semibold inline-flex items-center">
                      Start Assessment
                      <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Dengue Watch */}
          <motion.div variants={itemVariants} className="h-full">
            <Link href="/dengue" className="group block h-full">
              <div className="h-full bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-10 hover:border-sky-500 hover:shadow-xl shadow-lg shadow-sky-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="flex flex-col items-center text-center space-y-6 flex-1">
                  <div className="w-20 h-20 bg-sky-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Map className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Dengue Watch</h3>
                    <p className="text-slate-700">
                      Real-time outbreak monitoring and prevention tips
                    </p>
                  </div>
                  <div className="w-full pt-4 border-t border-blue-100">
                    <span className="text-sky-500 font-semibold inline-flex items-center">
                      View Map
                      <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Wellness Screening */}
          <motion.div variants={itemVariants} className="h-full">
            <Link href="/screening" className="group block h-full">
              <div className="h-full bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-10 hover:border-sky-500 hover:shadow-xl shadow-lg shadow-sky-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="flex flex-col items-center text-center space-y-6 flex-1">
                  <div className="w-20 h-20 bg-sky-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Wellness Services</h3>
                    <p className="text-slate-700">
                      Browse free health screenings and preventive care
                    </p>
                  </div>
                  <div className="w-full pt-4 border-t border-blue-100">
                    <span className="text-sky-500 font-semibold inline-flex items-center">
                      Browse Services
                      <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Identify Symptoms - Siren Icon */}
          <motion.div variants={itemVariants} className="h-full">
            <Link href="/identify" className="group block h-full">
              <div className="h-full bg-white/80 backdrop-blur-sm border border-red-100 rounded-3xl p-10 hover:border-red-500 hover:shadow-xl shadow-lg shadow-red-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="flex flex-col items-center text-center space-y-6 flex-1">
                  <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Siren className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Identify Symptoms</h3>
                    <p className="text-slate-700">
                      Emergency identification tools for Stroke, Heart Attack, Dengue & more
                    </p>
                  </div>
                  <div className="w-full pt-4 border-t border-red-100">
                    <span className="text-red-500 font-semibold inline-flex items-center">
                      Access Tools
                      <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Roadmap Link */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold text-lg group"
          >
            <TrendingUp className="w-5 h-5" />
            View Our Roadmap
            <span className="group-hover:ml-2 transition-all">→</span>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
