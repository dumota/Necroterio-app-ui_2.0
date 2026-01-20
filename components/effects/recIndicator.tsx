const RecIndicator = () => {
    return (
      <div className="flex items-center gap-1.5 bg-background/80 px-2 py-1 rounded-sm">
        <div className="w-2 h-2 rounded-full bg-primary rec-pulse" />
        <span className="font-vhs text-primary text-sm tracking-wider">REC</span>
      </div>
    );
  };
  
  export default RecIndicator;
  