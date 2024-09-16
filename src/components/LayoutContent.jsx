const LayoutContent = () => {
    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 h-full overflow-y-scroll bg-gray-800 text-white">
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Sidebar</h2>
            <ul>
              {Array.from({ length: 20 }, (_, i) => (
                <li key={i} className="py-2 border-b border-gray-700">
                  Sidebar Item {i + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 h-full overflow-y-scroll bg-gray-100">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Main Content</h1>
            <p>
              This is the main content area. It will scroll independently from the sidebar.
            </p>
            <div className="mt-8">
              {Array.from({ length: 100 }, (_, i) => (
                <p key={i} className="mb-4">
                  Content Line {i + 1}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LayoutContent;
  