import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import ThemeToggle from '../components/ThemeToggle';
import toast, { Toaster } from 'react-hot-toast';

const AdminDashboard = ({ theme, setTheme, products, onAddProduct, onDeleteProduct }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem('isAdminLoggedIn') === 'true'
  );
  
  // Login Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Tabs
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'users' | 'subscriptions' | 'products' | 'broadcast'
  
  // Modal State
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  
  // Mock Data States
  const [mockUsers, setMockUsers] = useState([
    { id: 1, name: 'Fawad Ali', email: 'fawad@example.com', status: 'Active', joined: '2026-04-12' },
    { id: 2, name: 'Usaid Khan', email: 'usaid@example.com', status: 'Active', joined: '2026-04-18' },
    { id: 3, name: 'Faiq Khan', email: 'faiq@example.com', status: 'Active', joined: '2026-04-20' },
    { id: 4, name: 'John Doe', email: 'john@example.com', status: 'Suspended', joined: '2026-05-02' },
    { id: 5, name: 'Alice Smith', email: 'alice@example.com', status: 'Active', joined: '2026-05-15' },
    { id: 6, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active', joined: '2026-05-24' },
  ]);

  const [mockSubs, setMockSubs] = useState([
    { id: 'sub-1', userName: 'Fawad Ali', userEmail: 'fawad@example.com', productTitle: 'EduSphere Pro', price: 99, cycle: 'Monthly', status: 'Active' },
    { id: 'sub-2', userName: 'Usaid Khan', userEmail: 'usaid@example.com', productTitle: 'EstateFlow Cloud', price: 149, cycle: 'Monthly', status: 'Active' },
    { id: 'sub-3', userName: 'Alice Smith', userEmail: 'alice@example.com', productTitle: 'HealthSync Web', price: 199, cycle: 'Monthly', status: 'Active' },
    { id: 'sub-4', userName: 'Bob Johnson', userEmail: 'bob@example.com', productTitle: 'FinTrack Enterprise', price: 159, cycle: 'Yearly', status: 'Active' },
  ]);

  // Email Broadcaster States
  const [emailGroup, setEmailGroup] = useState('all');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  // New Product Form States
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newRating, setNewRating] = useState('4.8');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newTech, setNewTech] = useState('');
  const [newShortDesc, setNewShortDesc] = useState('');
  const [newLongDesc, setNewLongDesc] = useState('');
  // Arrays
  const [newFeatures, setNewFeatures] = useState(['', '', '', '', '']);
  const [newBenefits, setNewBenefits] = useState(['', '', '']);
  // Specs
  const [specDeployment, setSpecDeployment] = useState('Cloud SaaS');
  const [specSecurity, setSpecSecurity] = useState('SSL & GDPR Compliant');
  const [specApi, setSpecApi] = useState('Full REST API');
  const [specSupport, setSpecSupport] = useState('24/7 Email Support');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@fuweb.com' && password === 'Test$123') {
      sessionStorage.setItem('isAdminLoggedIn', 'true');
      setIsLoggedIn(true);
      toast.success('Successfully logged in as Admin');
    } else {
      toast.error('Invalid admin credentials.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    setIsLoggedIn(false);
    toast.success('Logged out successfully');
  };

  const handleToggleUserStatus = (userId) => {
    setMockUsers((prev) => 
      prev.map((user) => 
        user.id === userId 
          ? { ...user, status: user.status === 'Active' ? 'Suspended' : 'Active' } 
          : user
      )
    );
    toast.success('User status updated');
  };

  const handleCancelSub = (subId) => {
    setMockSubs((prev) => 
      prev.map((sub) => 
        sub.id === subId ? { ...sub, status: 'Cancelled' } : sub
      )
    );
    toast.success('Subscription cancelled');
  };

  const handleSendBroadcast = (e) => {
    e.preventDefault();
    if (!emailSubject || !emailBody) {
      toast.error('Please specify subject and body of email.');
      return;
    }
    setIsSendingEmail(true);
    setTimeout(() => {
      setIsSendingEmail(false);
      setEmailSubject('');
      setEmailBody('');
      toast.success(`Newsletter successfully broadcasted to group "${emailGroup}"!`);
    }, 2500);
  };

  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    if (!newTitle || !newCategory || !newPrice || !newShortDesc) {
      toast.error('Please fill in all core fields');
      return;
    }

    const slug = newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Check for duplicates
    if (products.some((p) => p.id === slug)) {
      toast.error('A product with this title/slug already exists.');
      return;
    }

    const defaultImages = [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800'
    ];

    const finalProduct = {
      id: slug,
      title: newTitle,
      category: newCategory,
      price: parseFloat(newPrice),
      rating: parseFloat(newRating) || 4.8,
      image: newImageUrl || defaultImages[Math.floor(Math.random() * defaultImages.length)],
      tech: newTech ? newTech.split(',').map((t) => t.trim()) : ['SaaS'],
      description: newShortDesc,
      longDescription: newLongDesc || newShortDesc,
      features: newFeatures.filter((f) => f.trim() !== ''),
      benefits: newBenefits.filter((b) => b.trim() !== ''),
      specs: {
        'Deployment': specDeployment,
        'Security': specSecurity,
        'API Access': specApi,
        'Support': specSupport
      }
    };

    onAddProduct(finalProduct);
    toast.success('Product successfully published!');
    setShowAddProductModal(false);
    
    // Clear states
    setNewTitle('');
    setNewCategory('');
    setNewPrice('');
    setNewImageUrl('');
    setNewTech('');
    setNewShortDesc('');
    setNewLongDesc('');
    setNewFeatures(['', '', '', '', '']);
    setNewBenefits(['', '', '']);
  };

  const handleDeleteProductClick = (prodId) => {
    if (window.confirm('Are you sure you want to delete this product? It will disappear from the homepage catalog.')) {
      onDeleteProduct(prodId);
      toast.success('Product successfully deleted');
    }
  };

  // Login View
  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen flex flex-col justify-center items-center p-4 transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-gray-700'}`}>
        <Toaster />
        
        {/* Visual Backdrops */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

        {/* Login Box */}
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200/60 dark:border-gray-800/80 space-y-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <Logo theme={theme} className="w-40" />
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Admin Portal Login</h2>
              <p className="text-xs text-gray-400">Enter your credentials to manage FuwebSolutions</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400 block">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@fuweb.com"
                className="w-full p-3 text-sm border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400 block">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-3 text-sm border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-primary/30 hover:scale-102 active:scale-98 transition-all flex items-center justify-center cursor-pointer mt-6"
            >
              Sign In to Portal
            </button>
          </form>

          <div className="pt-4 text-center border-t border-gray-100 dark:border-gray-850">
            <Link to="/" className="text-xs text-gray-400 hover:text-primary transition-all">
              ← Return to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className={`min-h-screen flex flex-col md:flex-row transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-gray-700'}`}>
      <Toaster />

      {/* Sidebar Panel */}
      <aside className="w-full md:w-64 bg-white dark:bg-gray-900 border-b md:border-b-0 md:border-r border-gray-250/20 dark:border-gray-800/80 flex flex-col justify-between shrink-0 z-10">
        
        {/* Sidebar Header */}
        <div className="p-6 space-y-6">
          <Logo theme={theme} className="w-36" />
          <div className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-extrabold w-fit">
            Admin Portal
          </div>
          
          {/* Navigation Items */}
          <nav className="space-y-1.5 pt-4">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${activeTab === 'overview' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              Overview
            </button>

            <button 
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${activeTab === 'users' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              Users
            </button>

            <button 
              onClick={() => setActiveTab('subscriptions')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${activeTab === 'subscriptions' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
              Subscriptions
            </button>

            <button 
              onClick={() => setActiveTab('products')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${activeTab === 'products' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              Products Catalog
            </button>

            <button 
              onClick={() => setActiveTab('broadcast')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${activeTab === 'broadcast' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              Broadcast Email
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-gray-100 dark:border-gray-850 space-y-4">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Signed in: Admin</span>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 border border-red-500/20 text-red-500 text-xs font-bold rounded-full hover:bg-red-500/10 transition-all cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="px-6 md:px-12 py-4 border-b border-gray-250/20 dark:border-gray-800/80 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md flex items-center justify-between z-10">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
            {activeTab === 'products' ? 'Products Catalog' : `${activeTab} Management`}
          </h2>
          <Link to="/" className="text-xs text-primary hover:underline font-semibold flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            View Live Website
          </Link>
        </header>

        {/* Dashboard Tab Content */}
        <main className="flex-1 p-6 md:p-12 overflow-y-auto max-w-7xl w-full">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Stat 1 */}
                <div className="glass-card p-6 rounded-3xl border border-gray-150/40 dark:border-gray-850 shadow-md">
                  <div className="flex justify-between items-start text-gray-400">
                    <span className="text-xs font-bold uppercase tracking-wider">Total Sales</span>
                    <div className="bg-green-500/10 p-2 rounded-xl text-green-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">$45,390</h4>
                    <span className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                      <span>↑ +12.4%</span>
                      <span className="text-gray-400 dark:text-gray-500 font-medium">from last month</span>
                    </span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="glass-card p-6 rounded-3xl border border-gray-150/40 dark:border-gray-850 shadow-md">
                  <div className="flex justify-between items-start text-gray-400">
                    <span className="text-xs font-bold uppercase tracking-wider">Active Subscriptions</span>
                    <div className="bg-primary/10 p-2 rounded-xl text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">286</h4>
                    <span className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                      <span>↑ +8.2%</span>
                      <span className="text-gray-400 dark:text-gray-500 font-medium">from last week</span>
                    </span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="glass-card p-6 rounded-3xl border border-gray-150/40 dark:border-gray-850 shadow-md">
                  <div className="flex justify-between items-start text-gray-400">
                    <span className="text-xs font-bold uppercase tracking-wider">Total Users</span>
                    <div className="bg-blue-500/10 p-2 rounded-xl text-blue-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">1,048</h4>
                    <span className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                      <span>↑ +15.3%</span>
                      <span className="text-gray-400 dark:text-gray-500 font-medium">overall accounts</span>
                    </span>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="glass-card p-6 rounded-3xl border border-gray-150/40 dark:border-gray-850 shadow-md">
                  <div className="flex justify-between items-start text-gray-400">
                    <span className="text-xs font-bold uppercase tracking-wider">Active Products</span>
                    <div className="bg-purple-500/10 p-2 rounded-xl text-purple-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{products.length}</h4>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Dynamic SaaS listing</span>
                  </div>
                </div>

              </div>

              {/* Activity Logs & Chart Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left: Growth chart mockup */}
                <div className="lg:col-span-2 glass-card p-8 rounded-3xl shadow-lg space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-base text-gray-900 dark:text-white">Revenue Growth Metrics</h3>
                    <span className="text-xs text-gray-400 font-semibold">Weekly View</span>
                  </div>
                  {/* Simulated Line Chart Graphic */}
                  <div className="h-64 flex items-end gap-3 pt-6 border-b border-l border-gray-100 dark:border-gray-800 px-4">
                    <div className="w-full bg-primary/10 rounded-t-lg h-[40%] hover:bg-primary/20 transition-all cursor-pointer relative group flex justify-center">
                      <span className="absolute -top-7 bg-gray-900 text-white text-[9px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-150 transition-all font-mono">$12,490</span>
                    </div>
                    <div className="w-full bg-primary/20 rounded-t-lg h-[55%] hover:bg-primary/30 transition-all cursor-pointer relative group flex justify-center">
                      <span className="absolute -top-7 bg-gray-900 text-white text-[9px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-150 transition-all font-mono">$18,200</span>
                    </div>
                    <div className="w-full bg-primary/30 rounded-t-lg h-[48%] hover:bg-primary/40 transition-all cursor-pointer relative group flex justify-center">
                      <span className="absolute -top-7 bg-gray-900 text-white text-[9px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-150 transition-all font-mono">$15,900</span>
                    </div>
                    <div className="w-full bg-primary/50 rounded-t-lg h-[70%] hover:bg-primary/60 transition-all cursor-pointer relative group flex justify-center">
                      <span className="absolute -top-7 bg-gray-900 text-white text-[9px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-150 transition-all font-mono">$23,400</span>
                    </div>
                    <div className="w-full bg-primary rounded-t-lg h-[92%] hover:bg-primary-dark transition-all cursor-pointer relative group flex justify-center">
                      <span className="absolute -top-7 bg-gray-900 text-white text-[9px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-150 transition-all font-mono">$32,190</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-400 font-bold pt-2 px-6">
                    <span>Wk 1</span>
                    <span>Wk 2</span>
                    <span>Wk 3</span>
                    <span>Wk 4</span>
                    <span>Wk 5</span>
                  </div>
                </div>

                {/* Right: Activity Logs */}
                <div className="glass-card p-6 rounded-3xl shadow-lg space-y-6">
                  <h3 className="font-bold text-base text-gray-900 dark:text-white">Recent Activities</h3>
                  <div className="space-y-4">
                    
                    <div className="flex gap-3 text-xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 mt-1"></div>
                      <div className="space-y-0.5">
                        <p className="font-semibold text-gray-800 dark:text-gray-200">Fawad Ali subscribed to EduSphere Pro</p>
                        <span className="text-[10px] text-gray-400">10 minutes ago</span>
                      </div>
                    </div>

                    <div className="flex gap-3 text-xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 mt-1"></div>
                      <div className="space-y-0.5">
                        <p className="font-semibold text-gray-800 dark:text-gray-200">Usaid Khan subscribed to EstateFlow Cloud</p>
                        <span className="text-[10px] text-gray-400">45 minutes ago</span>
                      </div>
                    </div>

                    <div className="flex gap-3 text-xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0 mt-1"></div>
                      <div className="space-y-0.5">
                        <p className="font-semibold text-gray-800 dark:text-gray-200">Created new product AutoDrive ERP</p>
                        <span className="text-[10px] text-gray-400">2 hours ago</span>
                      </div>
                    </div>

                    <div className="flex gap-3 text-xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 mt-1"></div>
                      <div className="space-y-0.5">
                        <p className="font-semibold text-gray-800 dark:text-gray-200">Suspended account for John Doe</p>
                        <span className="text-[10px] text-gray-400">Yesterday</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: USERS */}
          {activeTab === 'users' && (
            <div className="glass-card rounded-3xl overflow-hidden shadow-lg border border-gray-150/30 dark:border-gray-850 animate-fade-in">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-900 border-b border-gray-150/30 dark:border-gray-850 text-gray-400 text-xs font-bold uppercase tracking-wider">
                      <th className="p-4 sm:p-6">Username</th>
                      <th className="p-4 sm:p-6">Email Address</th>
                      <th className="p-4 sm:p-6">Account Status</th>
                      <th className="p-4 sm:p-6">Date Joined</th>
                      <th className="p-4 sm:p-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-150/10 dark:border-gray-850/50 hover:bg-gray-50/50 dark:hover:bg-gray-850/30 transition-all">
                        <td className="p-4 sm:p-6 font-semibold text-gray-900 dark:text-white">{user.name}</td>
                        <td className="p-4 sm:p-6 text-gray-500 dark:text-gray-400">{user.email}</td>
                        <td className="p-4 sm:p-6">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${user.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="p-4 sm:p-6 text-gray-500 dark:text-gray-400 font-mono text-xs">{user.joined}</td>
                        <td className="p-4 sm:p-6 text-right">
                          <button 
                            onClick={() => handleToggleUserStatus(user.id)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all border ${user.status === 'Active' ? 'border-red-500/20 text-red-500 hover:bg-red-500/10' : 'border-green-500/20 text-green-500 hover:bg-green-500/10'}`}
                          >
                            {user.status === 'Active' ? 'Suspend' : 'Activate'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: SUBSCRIPTIONS */}
          {activeTab === 'subscriptions' && (
            <div className="glass-card rounded-3xl overflow-hidden shadow-lg border border-gray-150/30 dark:border-gray-850 animate-fade-in">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-900 border-b border-gray-150/30 dark:border-gray-850 text-gray-400 text-xs font-bold uppercase tracking-wider">
                      <th className="p-4 sm:p-6">Subscriber</th>
                      <th className="p-4 sm:p-6">SaaS Product</th>
                      <th className="p-4 sm:p-6">Monthly Rate</th>
                      <th className="p-4 sm:p-6">Billing Plan</th>
                      <th className="p-4 sm:p-6">Status</th>
                      <th className="p-4 sm:p-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockSubs.map((sub) => (
                      <tr key={sub.id} className="border-b border-gray-150/10 dark:border-gray-850/50 hover:bg-gray-50/50 dark:hover:bg-gray-850/30 transition-all">
                        <td className="p-4 sm:p-6">
                          <div className="space-y-0.5">
                            <span className="font-semibold text-gray-900 dark:text-white block">{sub.userName}</span>
                            <span className="text-[10px] text-gray-400 block">{sub.userEmail}</span>
                          </div>
                        </td>
                        <td className="p-4 sm:p-6 text-primary dark:text-blue-400 font-semibold">{sub.productTitle}</td>
                        <td className="p-4 sm:p-6 font-bold font-mono text-xs text-gray-900 dark:text-white">${sub.price}/mo</td>
                        <td className="p-4 sm:p-6">
                          <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[10px] font-bold text-gray-500">{sub.cycle}</span>
                        </td>
                        <td className="p-4 sm:p-6">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${sub.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-gray-400/10 text-gray-400'}`}>
                            {sub.status}
                          </span>
                        </td>
                        <td className="p-4 sm:p-6 text-right">
                          {sub.status === 'Active' && (
                            <button 
                              onClick={() => handleCancelSub(sub.id)}
                              className="px-4 py-1.5 border border-red-500/20 text-red-500 rounded-full text-xs font-bold hover:bg-red-500/10 transition-all cursor-pointer"
                            >
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: MANAGE PRODUCTS */}
          {activeTab === 'products' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400 font-medium">Manage available products in the home catalog.</p>
                <button 
                  onClick={() => setShowAddProductModal(true)}
                  className="bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md hover:shadow-primary/30 hover:scale-102 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
                >
                  Create Digital Product
                </button>
              </div>

              {/* Products List Table */}
              <div className="glass-card rounded-3xl overflow-hidden shadow-lg border border-gray-150/30 dark:border-gray-850">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-900 border-b border-gray-150/30 dark:border-gray-850 text-gray-400 text-xs font-bold uppercase tracking-wider">
                        <th className="p-4 sm:p-6">Product Details</th>
                        <th className="p-4 sm:p-6">Pricing</th>
                        <th className="p-4 sm:p-6">Category</th>
                        <th className="p-4 sm:p-6">Tech Stack</th>
                        <th className="p-4 sm:p-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((p) => (
                        <tr key={p.id} className="border-b border-gray-150/10 dark:border-gray-850/50 hover:bg-gray-50/50 dark:hover:bg-gray-850/30 transition-all">
                          <td className="p-4 sm:p-6">
                            <div className="flex items-center gap-3">
                              <img src={p.image} alt={p.title} className="w-12 h-12 object-cover rounded-xl shadow-inner shrink-0" />
                              <div className="space-y-0.5">
                                <span className="font-semibold text-gray-900 dark:text-white block">{p.title}</span>
                                <span className="text-[10px] text-gray-400 block max-w-xs truncate">{p.description}</span>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 sm:p-6 font-bold font-mono text-xs text-gray-900 dark:text-white">${p.price}/mo</td>
                          <td className="p-4 sm:p-6 text-gray-500 dark:text-gray-400">{p.category}</td>
                          <td className="p-4 sm:p-6">
                            <div className="flex flex-wrap gap-1.5">
                              {p.tech.map((t, idx) => (
                                <span key={idx} className="text-[9px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-gray-850 rounded text-gray-500">{t}</span>
                              ))}
                            </div>
                          </td>
                          <td className="p-4 sm:p-6 text-right">
                            <button 
                              onClick={() => handleDeleteProductClick(p.id)}
                              className="px-4 py-1.5 border border-red-500/20 text-red-500 rounded-full text-xs font-bold hover:bg-red-500/10 transition-all cursor-pointer"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: BROADCAST EMAIL */}
          {activeTab === 'broadcast' && (
            <div className="glass-card p-8 rounded-3xl shadow-lg border border-gray-150/30 dark:border-gray-850 max-w-2xl mx-auto animate-fade-in">
              <form onSubmit={handleSendBroadcast} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email Campaign Broadcaster</h3>
                  <p className="text-xs text-gray-400">Send HTML mock notifications to registered accounts in the system.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-gray-400 block">Recipient Group</label>
                    <select 
                      value={emailGroup}
                      onChange={(e) => setEmailGroup(e.target.value)}
                      className="w-full p-3 text-sm border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white dark:bg-gray-900"
                    >
                      <option className="dark:bg-gray-900" value="all">All Registered Users (1,048 recipients)</option>
                      <option className="dark:bg-gray-900" value="active">Active Subscribers (286 recipients)</option>
                      <option className="dark:bg-gray-900" value="suspended">Suspended Accounts (1 recipient)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-gray-400 block">Subject Line</label>
                    <input 
                      type="text" 
                      required
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      placeholder="Welcome to FuwebSolutions! Introducing our new dashboards..."
                      className="w-full p-3 text-sm border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-gray-400 block">Message Body (Markdown / Rich-text Mockup)</label>
                    <textarea 
                      rows={6}
                      required
                      value={emailBody}
                      onChange={(e) => setEmailBody(e.target.value)}
                      placeholder="Hello user, we are pleased to inform you that we have deployed a new version of the SaaS platform..."
                      className="w-full p-3 text-sm border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSendingEmail}
                  className="bg-primary text-white px-8 py-3 rounded-full text-xs font-semibold shadow-lg hover:shadow-primary/30 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:bg-primary/50"
                >
                  {isSendingEmail ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Emails...
                    </>
                  ) : (
                    <>
                      Send Broadcast <img src={assets.arrow_icon} alt="" className="w-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

        </main>
      </div>

      {/* CREATE DIGITAL PRODUCT MODAL */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300 overflow-y-auto">
          
          <div className="relative w-full max-w-2xl bg-white dark:bg-gray-950 rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-800/80 my-8">
            
            {/* Header */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-850 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Create SaaS Product</h3>
                <p className="text-xs text-gray-400">Add a dynamic digital product to Selected Digital Products listing.</p>
              </div>
              <button 
                onClick={() => setShowAddProductModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-all p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleAddProductSubmit} className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-gray-400 block">Product Title</label>
                  <input 
                    type="text" 
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="EduSphere Pro"
                    className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-gray-400 block">Category</label>
                  <input 
                    type="text" 
                    required
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Education SaaS"
                    className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-gray-400 block">Monthly Price ($)</label>
                  <input 
                    type="number" 
                    required
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    placeholder="99"
                    className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-gray-400 block">Rating (1-5)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    min="1"
                    max="5"
                    value={newRating}
                    onChange={(e) => setNewRating(e.target.value)}
                    placeholder="4.8"
                    className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 block">Image URL (Optional, defaults to Unsplash placeholder)</label>
                <input 
                  type="text" 
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 block">Tech Stack Tags (Comma separated)</label>
                <input 
                  type="text" 
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  placeholder="React, Node.js, MongoDB, Express"
                  className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 block">Short Description</label>
                <input 
                  type="text" 
                  required
                  value={newShortDesc}
                  onChange={(e) => setNewShortDesc(e.target.value)}
                  placeholder="Advanced school analytics and parent dashboard portals."
                  className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 block">Long Description (Product Detail Overview)</label>
                <textarea 
                  rows={3}
                  value={newLongDesc}
                  onChange={(e) => setNewLongDesc(e.target.value)}
                  placeholder="EduSphere Pro is an all-in-one cloud platform engineered for modern educational institutions..."
                  className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                />
              </div>

              {/* Dynamic Feature Inputs */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold text-gray-400 block">Key Features (Up to 5)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {newFeatures.map((feat, idx) => (
                    <input 
                      key={idx}
                      type="text"
                      value={feat}
                      onChange={(e) => {
                        const updated = [...newFeatures];
                        updated[idx] = e.target.value;
                        setNewFeatures(updated);
                      }}
                      placeholder={`Feature ${idx + 1}`}
                      className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                    />
                  ))}
                </div>
              </div>

              {/* Dynamic Benefit Inputs */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold text-gray-400 block">Key Benefits (Up to 3)</label>
                <div className="space-y-2">
                  {newBenefits.map((ben, idx) => (
                    <input 
                      key={idx}
                      type="text"
                      value={ben}
                      onChange={(e) => {
                        const updated = [...newBenefits];
                        updated[idx] = e.target.value;
                        setNewBenefits(updated);
                      }}
                      placeholder={`Benefit ${idx + 1}`}
                      className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                    />
                  ))}
                </div>
              </div>

              {/* Spec configurations */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold text-gray-400 block border-b border-gray-100 dark:border-gray-850 pb-2">Technical Specs</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase font-bold text-gray-400 block">Deployment</label>
                    <input 
                      type="text" 
                      value={specDeployment}
                      onChange={(e) => setSpecDeployment(e.target.value)}
                      className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase font-bold text-gray-400 block">Security</label>
                    <input 
                      type="text" 
                      value={specSecurity}
                      onChange={(e) => setSpecSecurity(e.target.value)}
                      className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase font-bold text-gray-400 block">API Access</label>
                    <input 
                      type="text" 
                      value={specApi}
                      onChange={(e) => setSpecApi(e.target.value)}
                      className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase font-bold text-gray-400 block">Support SLA</label>
                    <input 
                      type="text" 
                      value={specSupport}
                      onChange={(e) => setSpecSupport(e.target.value)}
                      className="w-full p-2.5 text-xs border border-gray-200 dark:border-gray-800 bg-transparent rounded-xl outline-none focus:border-primary transition-all dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Modal Footer / Save */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-850 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setShowAddProductModal(false)}
                  className="px-6 py-2.5 border border-gray-200 dark:border-gray-800 rounded-full text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-900 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-primary text-white px-8 py-2.5 rounded-full text-xs font-bold shadow-md hover:shadow-primary/30 hover:scale-102 active:scale-98 transition-all cursor-pointer"
                >
                  Publish Product
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
