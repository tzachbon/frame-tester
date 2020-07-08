import * as React from "react";

interface SafariFrameProps {}


const SafariFrame: React.FC<SafariFrameProps> = () => {
    return (
        <div className="safari-header-dark">
           
        <div className="search-bar">
            <img className="aA" src="https://img.icons8.com/ios-glyphs/30/000000/sentence-case--v1.png"/>
            <input type="text"/>
            <img className="refresh" src="https://img.icons8.com/ios/50/000000/restart.png" alt="" />
            
        </div>
  
    
    {/* <footer className="safari-footer-dark">
        <img src="./icons/modern-left.png" alt="" />
        <img src="./icons/modern-right.png" alt="" />
        <img src="./icons/upload.png" alt="" />
        <img src="./icons/bookmark.png" alt="" />
        <img src="./icons/tabs.PNG" alt="" />
    </footer> */}
        </div>
    );
};

export default SafariFrame