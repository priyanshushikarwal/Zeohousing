import React, { useState, useEffect } from 'react';
import {
    Activity,
    Server,
    Globe,
    Cpu,
    Zap,
    Shield,
    Clock,
    Database,
    Wifi,
    BarChart3,
    Terminal,
    Settings,
    LogOut,
    ChevronRight,
    Search
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const [activePage, setActivePage] = useState('Overview');
    const [cpuUsage, setCpuUsage] = useState<number[]>(Array(20).fill(0));
    const [memoryUsage, setMemoryUsage] = useState(42);
    const [networkTraffic, setNetworkTraffic] = useState(1284);

    // Simulate real-time data updates
    useEffect(() => {
        const interval = setInterval(() => {
            setCpuUsage(prev => {
                const newData = [...prev.slice(1), Math.random() * 100];
                return newData;
            });
            setMemoryUsage(prev => Math.min(100, Math.max(20, prev + (Math.random() - 0.5) * 10)));
            setNetworkTraffic(prev => Math.max(800, prev + (Math.random() - 0.5) * 200));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const servers = [
        { id: 'srv-us-east-1a', region: 'US-East (N. Virginia)', status: 'Operational', load: 45, latency: '24ms', type: 'g5.12xlarge' },
        { id: 'srv-eu-west-2b', region: 'EU-West (London)', status: 'Heavy Load', load: 88, latency: '142ms', type: 'p4d.24xlarge' },
        { id: 'srv-ap-northeast-1', region: 'AP-Northeast (Tokyo)', status: 'Operational', load: 32, latency: '89ms', type: 'c6gn.16xlarge' },
        { id: 'srv-sa-east-1', region: 'SA-East (São Paulo)', status: 'Maintenance', load: 0, latency: '--', type: 'm6i.32xlarge' },
    ];

    const renderContent = () => {
        switch (activePage) {
            case 'Overview':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        {/* Top Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <StatCard
                                title="ACTIVE PLAN"
                                value="6 MONTHS"
                                subtext="ENTERPRISE TIER"
                                icon={<Shield className="text-gray-600" />}
                                highlight
                            />
                            <StatCard
                                title="TOTAL INSTANCES"
                                value="142"
                                subtext="+12 auto-scaled"
                                icon={<Server className="text-blue-600" />}
                            />
                            <StatCard
                                title="NETWORK I/O"
                                value={`${(networkTraffic / 1000).toFixed(2)} GB/s`}
                                subtext="Peak Load"
                                icon={<Wifi className="text-cyan-600" />}
                            />
                            <StatCard
                                title="EST. COST"
                                value="$4,291.00"
                                subtext="Current Month"
                                icon={<Zap className="text-yellow-600" />}
                            />
                        </div>

                        {/* Main Dashboard Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* Server Status List */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="text-lg font-bold flex items-center gap-2 text-gray-800">
                                        <Globe className="w-5 h-5 text-gray-600" />
                                        Global Instance Health
                                    </h2>
                                    <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">View All Regions</button>
                                </div>

                                <div className="grid gap-4">
                                    {servers.map(server => (
                                        <div key={server.id} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-all">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-2 h-12 rounded-full ${server.status === 'Operational' ? 'bg-green-500' :
                                                        server.status === 'Heavy Load' ? 'bg-orange-500' : 'bg-red-500'
                                                    }`} />
                                                <div>
                                                    <div className="font-bold text-sm text-gray-900">{server.id}</div>
                                                    <div className="text-xs text-gray-500">{server.region}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-8 text-sm font-mono">
                                                <div className="hidden md:block">
                                                    <div className="text-[10px] text-gray-400 uppercase">Type</div>
                                                    <div className="text-gray-700">{server.type}</div>
                                                </div>
                                                <div className="hidden md:block">
                                                    <div className="text-[10px] text-gray-400 uppercase">Latency</div>
                                                    <div className={parseInt(server.latency) > 100 ? 'text-orange-600' : 'text-green-600'}>{server.latency}</div>
                                                </div>
                                                <div className="w-24">
                                                    <div className="text-[10px] text-gray-400 uppercase mb-1">CPU Load</div>
                                                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full ${server.load > 80 ? 'bg-red-500' : 'bg-blue-600'}`}
                                                            style={{ width: `${server.load}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Real-time Graph Simulation */}
                                <div className="bg-white border border-gray-200 rounded-xl p-6 mt-8 shadow-sm">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="font-bold flex items-center gap-2 text-gray-800">
                                            <Activity className="w-4 h-4 text-gray-600" />
                                            Real-time CPU Utilization (Cluster A)
                                        </h3>
                                        <div className="flex gap-2 items-center">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs text-green-600 font-bold">LIVE</span>
                                        </div>
                                    </div>
                                    <div className="h-48 flex items-end justify-between gap-1">
                                        {cpuUsage.map((usage, i) => (
                                            <div
                                                key={i}
                                                className="w-full bg-gray-50 rounded-t transition-all duration-300"
                                                style={{ height: `${usage}%` }}
                                            >
                                                <div
                                                    className="w-full bg-gray-800 rounded-t-sm"
                                                    style={{ height: '100%', opacity: 0.8 }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-gray-400 font-mono">
                                        <span>-60s</span>
                                        <span>-30s</span>
                                        <span>Now</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column Stats */}
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Resource Allocation</h3>

                                    <div className="space-y-6">
                                        <ResourceMeter
                                            label="vCPU Cores"
                                            value={1024}
                                            total={2000}
                                            unit="Cores"
                                            color="bg-blue-600"
                                        />
                                        <ResourceMeter
                                            label="Memory (RAM)"
                                            value={memoryUsage}
                                            total={100}
                                            unit="TB"
                                            percentage
                                            color="bg-purple-600"
                                        />
                                        <ResourceMeter
                                            label="NVMe Storage"
                                            value={84}
                                            total={100}
                                            unit="PB"
                                            percentage
                                            color="bg-pink-600"
                                        />
                                        <ResourceMeter
                                            label="GPU Units (H100)"
                                            value={64}
                                            total={64}
                                            unit="Units"
                                            color="bg-green-600"
                                        />
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6 relative overflow-hidden shadow-sm">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <Shield className="w-24 h-24 text-gray-900" />
                                    </div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Security Status</h3>
                                    <div className="text-2xl font-bold text-green-600 mb-4">PROTECTED</div>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex justify-between border-b border-gray-100 pb-2">
                                            <span>DDoS Mitigation</span>
                                            <span className="text-gray-900 font-medium">Active</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-100 pb-2">
                                            <span>WAF Rules</span>
                                            <span className="text-gray-900 font-medium">2,401 Loaded</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>SSL/TLS</span>
                                            <span className="text-gray-900 font-medium">Valid (Wildcard)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50">
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-sm font-bold text-blue-900 mb-1">Scheduled Maintenance</div>
                                            <p className="text-xs text-blue-700 leading-relaxed">
                                                Cluster B update scheduled for 03:00 UTC. No downtime expected for high-availability zones.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <Settings className="w-10 h-10 text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{activePage}</h2>
                        <p className="text-gray-500 max-w-md">
                            This module is currently active and collecting data. Detailed metrics and configuration options will appear here.
                        </p>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 flex overflow-hidden font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col z-20 shadow-sm">
                <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center font-bold italic text-white shadow-lg">Z</div>
                    <span className="font-bold tracking-wider text-gray-900">ZEO-CONSOLE</span>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4 px-2 mt-2">Infrastructure</div>
                    <NavItem
                        icon={<Activity />}
                        label="Overview"
                        active={activePage === 'Overview'}
                        onClick={() => setActivePage('Overview')}
                    />
                    <NavItem
                        icon={<Server />}
                        label="Instances"
                        active={activePage === 'Instances'}
                        onClick={() => setActivePage('Instances')}
                    />
                    <NavItem
                        icon={<Database />}
                        label="Storage Buckets"
                        active={activePage === 'Storage Buckets'}
                        onClick={() => setActivePage('Storage Buckets')}
                    />
                    <NavItem
                        icon={<Globe />}
                        label="CDN & Edge"
                        active={activePage === 'CDN & Edge'}
                        onClick={() => setActivePage('CDN & Edge')}
                    />
                    <NavItem
                        icon={<Shield />}
                        label="Security Groups"
                        active={activePage === 'Security Groups'}
                        onClick={() => setActivePage('Security Groups')}
                    />

                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4 px-2 mt-8">Analytics</div>
                    <NavItem
                        icon={<BarChart3 />}
                        label="Traffic Logs"
                        active={activePage === 'Traffic Logs'}
                        onClick={() => setActivePage('Traffic Logs')}
                    />
                    <NavItem
                        icon={<Terminal />}
                        label="Command Line"
                        active={activePage === 'Command Line'}
                        onClick={() => setActivePage('Command Line')}
                    />
                </nav>

                <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <img src={user?.photoURL || ''} alt="User" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" />
                        <div className="overflow-hidden">
                            <div className="text-sm font-bold truncate text-gray-900">{user?.displayName}</div>
                            <div className="text-[10px] text-green-600 flex items-center gap-1 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                ADMIN ACCESS
                            </div>
                        </div>
                    </div>
                    <button onClick={logout} className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 text-gray-600 hover:text-red-600 transition-all text-sm font-medium">
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto relative bg-gray-50">
                <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center text-gray-500 text-sm">
                            <span className="hover:text-gray-900 cursor-pointer">Dashboard</span>
                            <ChevronRight className="w-4 h-4 mx-1" />
                            <span className="font-semibold text-gray-900">{activePage}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-gray-100 text-gray-600 border border-gray-200 font-mono">US-EAST-1</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search resources..."
                                className="pl-9 pr-4 py-1.5 text-sm bg-gray-100 border-transparent focus:bg-white focus:border-gray-300 focus:ring-0 rounded-md transition-all w-64"
                            />
                        </div>
                        <div className="h-6 w-px bg-gray-200" />
                        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            SYSTEM NORMAL
                        </div>
                        <Settings className="w-5 h-5 text-gray-400 hover:text-gray-700 cursor-pointer transition-colors" />
                    </div>
                </header>

                <div className="p-8">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

const NavItem = ({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) => (
    <div
        onClick={onClick}
        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${active
                ? 'bg-gray-900 text-white shadow-md shadow-gray-200'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
            }`}
    >
        {React.cloneElement(icon as React.ReactElement, { size: 18, className: active ? 'text-white' : 'text-gray-400 group-hover:text-gray-600' })}
        <span className="text-sm font-medium">{label}</span>
    </div>
);

const StatCard = ({ title, value, subtext, icon, highlight = false }: any) => (
    <div className={`p-6 rounded-xl border transition-all duration-300 ${highlight
            ? 'bg-white border-gray-200 shadow-lg shadow-gray-100'
            : 'bg-white border-gray-200 hover:shadow-md'
        }`}>
        <div className="flex justify-between items-start mb-4">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{title}</div>
            <div className={`p-2 rounded-lg ${highlight ? 'bg-gray-50' : 'bg-gray-50'}`}>
                {icon}
            </div>
        </div>
        <div className="text-2xl font-black text-gray-900 mb-1 tracking-tight">{value}</div>
        <div className="text-xs text-gray-500 font-medium">{subtext}</div>
    </div>
);

const ResourceMeter = ({ label, value, total, unit, color, percentage = false }: any) => {
    const percent = percentage ? value : (value / total) * 100;
    return (
        <div>
            <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-500 font-medium">{label}</span>
                <span className="text-gray-900 font-mono font-bold">{value} {percentage ? '%' : ''} <span className="text-gray-400 font-normal">/ {total} {unit}</span></span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full transition-all duration-500`} style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
};

export default Dashboard;
