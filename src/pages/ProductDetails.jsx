import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productsData } from '../assets/products';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import assets from '../assets/assets';
import toast, { Toaster } from 'react-hot-toast';

const ProductDetails = ({ theme, setTheme, products }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [showCheckout, setShowCheckout] = useState(false);
  
  // Checkout Form States
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Find the product in catalog
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-gray-800'}`}>
        <Nav theme={theme} setTheme={setTheme} />
        <div className="flex flex-col items-center justify-center py-40 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
            The digital product you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all">
            Back to Home
          </Link>
        </div>
        <Footer theme={theme} />
      </div>
    );
  }

  // Calculate pricing based on billing cycle (20% discount for yearly)
  const displayPrice = billingCycle === 'monthly' 
    ? product.price 
    : Math.round(product.price * 0.8);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!cardName || !cardNumber || !cardExpiry || !cardCvv) {
      toast.error('Please fill in all credit card details.');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate secure network transaction
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success(`Successfully subscribed to ${product.title}!`);
      
      // Auto close checkout modal after success animation
      setTimeout(() => {
        setShowCheckout(false);
        setIsSuccess(false);
        setCardName('');
        setCardNumber('');
        setCardExpiry('');
        setCardCvv('');
      }, 2500);
    }, 2000);
  };

  // Format Card Number
  const handleCardNumberChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').substring(0, 16);
    const formatted = val.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formatted);
  };

  // Format Expiry Date
  const handleExpiryChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) {
      setCardExpiry(`${val.substring(0, 2)}/${val.substring(2, 4)}`);
    } else {
      setCardExpiry(val);
    }
  };

  // Helper function to return beautiful SVGs for product feature lists
  const renderFeatureIcon = (index) => {
    const icons = [
      // Icon 1: Grid/Dashboard
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>,
      // Icon 2: Lock/Shield
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>,
      // Icon 3: Lightning/Bolt
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
      // Icon 4: Users
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>,
      // Icon 5: Chart/Graph
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2"/></svg>
    ];
    return icons[index % icons.length];
  };

  // Helper function to return beautiful SVGs for technical specs
  const renderSpecIcon = (key) => {
    switch (key.toLowerCase()) {
      case 'deployment':
        return <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>;
      case 'security':
        return <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>;
      case 'api access':
        return <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>;
      case 'support':
        return <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>;
      default:
        return <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-gray-700'}`}>
      <Toaster />
      
      {/* Background Blob Animations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

      <Nav theme={theme} setTheme={setTheme} />

      {/* Main Container */}
      <main className=" mx-auto px-4 sm:px-12 lg:px-24 xl:px-40 py-16">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-all dark:text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Back to Digital Products
          </Link>
        </div>

        {/* Product Details Section (Side by Side at md screen) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Visual Display Card & What's Included */}
          <div className="md:col-span-5 space-y-8">
            {/* Image Wrap */}
            <div className="glass-card p-3 rounded-3xl overflow-hidden shadow-2xl relative group">
              <div className="h-64 sm:h-80 md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/95 dark:bg-black/90 backdrop-blur-md text-xs font-bold rounded-full text-primary shadow-md">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Inclusions Card */}
            <div className="glass-card p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800/80">
              <h3 className="font-bold text-base text-gray-900 dark:text-white mb-4">What's Included</h3>
              <ul className="space-y-3.5 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Full access to dashboard and controls</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Regular automated software updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>High-speed database integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Basic onboarding & training session</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Copy & Pricing Selection */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent leading-tight">
                {product.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                  <span className="text-xs font-bold ml-1.5 text-gray-500 dark:text-gray-400">{product.rating} (52 reviews)</span>
                </div>
                <span className="text-gray-300 dark:text-gray-800">|</span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Deployable SaaS Product</span>
              </div>

              <p className="text-base sm:text-lg font-medium text-gray-500 dark:text-white/75 leading-relaxed pt-2">
                {product.longDescription}
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider">Business Impact & Value:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Section Card */}
            <div className="glass-card p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800/80 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-gray-100 dark:border-gray-800/85 pb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Choose Plan Cycle</h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Select billing cycle. Annual billing includes 20% discount.</p>
                </div>
                
                {/* Billing Cycle Switcher */}
                <div className="flex items-center bg-gray-100 dark:bg-gray-900 p-1 rounded-full border border-gray-200 dark:border-gray-800 shrink-0 w-fit mx-auto sm:mx-0">
                  <button 
                    type="button"
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer ${billingCycle === 'monthly' ? 'bg-primary text-white shadow-md' : 'text-gray-500 dark:text-gray-400'}`}
                  >
                    Monthly
                  </button>
                  <button 
                    type="button"
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer ${billingCycle === 'yearly' ? 'bg-primary text-white shadow-md' : 'text-gray-400 dark:text-gray-500'}`}
                  >
                    Yearly (-20%)
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">${displayPrice}</span>
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">/ month</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <span className="text-xs text-green-500 font-bold block mt-1">
                      Billed annually (${displayPrice * 12}/year)
                    </span>
                  )}
                </div>

                <button 
                  onClick={() => setShowCheckout(true)}
                  className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-primary/30 hover:scale-102 active:scale-98 transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer w-full sm:w-fit"
                >
                  Get Started Now <img src={assets.arrow_icon} alt="" className="w-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Section: Core Capabilities (Using Title component) */}
        <section className="mt-28">
          <Title 
            title="Core Capabilities" 
            desc="Everything you need to successfully execute workflows in a scalable SaaS ecosystem." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {product.features.map((feature, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl shadow-md border border-gray-100/50 dark:border-gray-800/50 hover:border-primary/20 dark:hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex gap-4">
                <div className="bg-primary/10 rounded-xl p-3 h-fit w-fit shrink-0 flex items-center justify-center">
                  {renderFeatureIcon(i)}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">Feature {i + 1}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Technical Specs (Card styled blocks with icons) */}
        <section className="mt-28">
          <Title 
            title="Technical Specifications" 
            desc="Advanced cloud setups, database specifications, and security certifications." 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} className="glass-card p-6 rounded-3xl border border-gray-100 dark:border-gray-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                <div className="bg-primary/10 rounded-xl p-3 shrink-0 flex items-center justify-center">
                  {renderSpecIcon(key)}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">{key}</span>
                  <span className="text-sm font-semibold text-gray-800 dark:text-white block">{val}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer theme={theme} />

      {/* Slide-In Overlay/Modal for Interactive Checkout Mockup */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300">
          <div className="relative w-full max-w-4xl bg-white dark:bg-gray-950 rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-800/80 animate-scale-up">

            {/* Modal Close Button */}
            <button 
              onClick={() => setShowCheckout(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-all p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: Product summary */}
              <aside className="p-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/60 dark:to-gray-950 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <img src={product.image} alt={product.title} className="w-28 h-20 object-cover rounded-xl shadow-sm" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{product.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <span className="font-bold text-yellow-400">{product.rating}</span>
                      <span className="text-gray-300">|</span>
                      <span>{product.category}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-4 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/60">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-gray-900 dark:text-white">${displayPrice}</span>
                    <span className="text-sm text-gray-400">/ month</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="text-xs text-green-500 font-bold mt-1">Billed annually (${displayPrice * 12}/year)</div>
                  )}
                </div>

                <div>
                  <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Included</h5>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    {product.benefits.slice(0, 4).map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto text-xs text-gray-400">
                  <p>Secure checkout • 256-bit encryption • PCI compliant</p>
                </div>
              </aside>

              {/* Right: Checkout Form */}
              <section className="p-8">
                {!isSuccess ? (
                  <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">Checkout</span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Complete your subscription</h3>
                      <p className="text-xs text-gray-400 mt-1">You're subscribing to <strong className="text-gray-700 dark:text-gray-200">{product.title}</strong>. Secure payment below.</p>
                    </div>

                    {/* Compact Virtual Card */}
                    <div className="relative w-full h-36 rounded-2xl p-4 text-white overflow-hidden shadow-lg bg-gradient-to-br from-[#5044E5] via-[#4d8cea] to-indigo-800">
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-center">
                          <div className="w-8 h-6 bg-yellow-300 rounded-md"></div>
                          <span className="text-[10px] font-extrabold opacity-80">SECURE</span>
                        </div>
                        <div className="font-mono text-sm tracking-widest">{cardNumber || '•••• •••• •••• ••••'}</div>
                        <div className="flex justify-between items-end text-xs">
                          <div>
                            <div className="text-[9px] uppercase opacity-60">Cardholder</div>
                            <div className="font-semibold uppercase">{cardName || 'YOUR NAME'}</div>
                          </div>
                          <div>
                            <div className="text-[9px] uppercase opacity-60">Expires</div>
                            <div className="font-semibold">{cardExpiry || 'MM/YY'}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 block">Cardholder Name</label>
                        <input 
                          type="text" 
                          required
                          placeholder="John Doe"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          className="w-full p-3 text-sm border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 block">Card Number</label>
                        <input 
                          type="text" 
                          required
                          placeholder="0000 0000 0000 0000"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          className="w-full p-3 text-sm border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 block">Expiry Date</label>
                        <input 
                          type="text" 
                          required
                          placeholder="MM/YY"
                          value={cardExpiry}
                          onChange={handleExpiryChange}
                          className="w-full p-3 text-sm border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white text-center"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 block">CVV</label>
                        <input 
                          type="password" 
                          required
                          maxLength="3"
                          placeholder="***"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                          className="w-full p-3 text-sm border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white text-center"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Total:</div>
                      <div className="text-lg font-bold">${displayPrice * (billingCycle === 'yearly' ? 12 : 1)}{billingCycle === 'yearly' && ' / year'}</div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:bg-primary/50"
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        `Confirm & Pay $${displayPrice * (billingCycle === 'yearly' ? 12 : 1)}`
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center">By completing purchase you agree to our terms and privacy policy.</p>
                  </form>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-scale-up">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-500 shadow-inner">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Subscription Active!</h3>
                    <p className="text-sm text-gray-400 max-w-xs">
                      Your license is active. Check your email inbox for setup credentials and invoices.
                    </p>
                  </div>
                )}
              </section>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetails;
