import { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, Calculator, Gamepad2 } from 'lucide-react';

const AppIcon = ({ icon: Icon, label, onClick }) => (
  <motion.div
    className="flex flex-col items-center cursor-pointer p-2 rounded-xl hover:bg-white/10 transition"
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    <Icon size={32} />
    <span className="text-sm mt-1">{label}</span>
  </motion.div>
);

const Window = ({ title, onClose, children }) => (
  <motion.div
    className="absolute top-20 left-20 w-96 bg-white bg-opacity-90 rounded-2xl shadow-xl p-4"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
  >
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg font-bold">{title}</h2>
      <button onClick={onClose} className="text-red-500 hover:text-red-700 text-xl">×</button>
    </div>
    <div>{children}</div>
  </motion.div>
);

function App() {
  const [openApp, setOpenApp] = useState(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-800 to-indigo-900 text-white font-sans overflow-hidden">
      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 w-full bg-black/30 backdrop-blur p-2 flex gap-4 justify-center border-t border-white/10">
        <AppIcon icon={Folder} label="Portfolio" onClick={() => setOpenApp('portfolio')} />
        <AppIcon icon={Calculator} label="Calculator" onClick={() => setOpenApp('calculator')} />
        <AppIcon icon={Gamepad2} label="Games" onClick={() => setOpenApp('games')} />
      </div>

      {/* Desktop */}
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyriadOS</h1>
        <p className="text-white/80">Click the icons on the taskbar to open apps.</p>
      </div>

      {/* Windows */}
      {openApp === 'portfolio' && (
        <Window title="Portfolio" onClose={() => setOpenApp(null)}>
          <p>This is where you’ll showcase your projects.</p>
          <ul className="mt-2 list-disc list-inside text-black">
            <li>Cool Website</li>
            <li>Game Demo</li>
            <li>Calculator App</li>
          </ul>
        </Window>
      )}

      {openApp === 'calculator' && (
        <Window title="Calculator" onClose={() => setOpenApp(null)}>
          <p className="text-black">Coming soon!</p>
        </Window>
      )}

      {openApp === 'games' && (
        <Window title="Games" onClose={() => setOpenApp(null)}>
          <p className="text-black">This will be your game hub.</p>
        </Window>
      )}
    </div>
  );
}

export default App;
