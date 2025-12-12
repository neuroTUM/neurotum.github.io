// src/app/components/Hero.tsx

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const ASCII_DATA = `                                                                                 
                                         %#=:0:-=*-:::::--+#0%%1%                                   
                                 %*-::---:--+-=-:-----==::::-:::::-=0%                              
                             #*++:::0=+=::::=*--:::-++::::1++::1:---:-*%                            
                        #*+-:::0-----------::=+=--::=+--:1:-+-:::=+=---0+*#                         
                      %+:::1:-0++:1:::::-:---:--+=-:-=0=:::-=*+=-:::=**+=:::*                       
                    %#+::=*=-::::::---::::::-+=+=::--=*-::-+*=::----::==::--0#                      
                  #--=:-*-::::-=:::::++--===-=+:::--=11::::-+-::--*=-::---::+*##%                   
                #+::::-*-==::::+=--=+*-:::::=+:::-=+*=::---=+::::-++=----:::-*-::+                  
              #+=++==-::=*-:::-=*+=-:::::::-+-::--=*=::--+**-::::-=*==-==-:::-*==-#%                
             *::=::-=-::::---=+-::::::-+====*--::-+*-:::--=+-::--:-:::::-==::-+--=-*#%              
            *=-=::-+=:---::-=#-::---==++--==++-::::-+-:::-==::-==::-==-:--=::+*=--*=-+%             
           #+==--+-::-=+----=*:11::+**-:::-11:-+=::::-=:::::----=+=+++:::--+::::+-:-+-=#             
          *::=**+:::=++-=+*+**-:::-++:::---:::-+-:::---------=01**=::::--==:-+--:--+===#            
         *:-=-::-::::::::::+::::--=**-::--+--::--:11----======+**-:::::------:==---++==-#           
         +==.::-=---==--::--:--===-::-::-=+=--------======+*****=-:::::---=+=--==-=#+-+=-#          
         #+=:-=+*++===---:-------:::::--==++========++++++*#=-::----::---=+===---==*+=-+-+%         
         *+=--:-*-:::::::-----===----====++*++++==++*#**11=::-----::---==*=-======##*+=+=*%         
        #:-**+=-=:::::--=---===-++=====+++*00*******--:::::--==========+*=:-=++=++---++=+*%         
        *-=+---==--:--=+=---==+=--**+++**1*=-::::::---------==+*=====+*#=:--==##=-=+=-==+=*         
        %*=+===-==--==*----==+*+==+*#**#=::::::::-===-----====##***##**----==*+-----###***++#        
         %#+**+++**++=======+==++***##-:---------==*========+#=::::---==--==*+-----###***++#        
           *--=***#####*+++++++****#*----=========+##***#*+=:--=============---===+*==*+*+#       
           #-=++***##*###0#*****##*-----=++====+***=---==----====+##***++*======+==*+==*+=+#        
            #+=+++********#110#1%%---===*##*====------=++====++**+====-===+==+#*++#*+=++++*%        
              #+===++++******###*++======*+====-======+#******++==++****+++*#001#*++*+===++*        
                 %%*+====+*###%%=-=+*+===+========*#*+--=-====++**#*+===+#*=--==#**+++++*+#         
                              %*=+==-=+=++===========++++++++*++++++++***++++++==**+++***#         
                               %*++================+**++***********#%%111%###**++**#***#%           
                                 %%#+++++*##*#**+++++++*#%111%%###**+++*+=+=++**#####%%             
                                    %#*++++++**++++***#%%%%#000#*++++=====+++++*****#@               
                                       %####*****######%%####**+**+====+++++++****##@               
                                             %0#0#011111%###**+++++++++**++*++*****%                
                                              %#############**+++++++++++++***####%                
                                                %%##*#000%1001***********########%                  
                                                  %#******#%%%####0000000#####%@                    
                                                   %*++****#%####%%1111111%%%%                       
                                                     #*******%#10%@                                 
                                                       #*******1@                                   
                                                        %*+*+=+*%                                   
                                                          #*+=-+*%                                  
                                                           %*+++*%                                  
                                                             `;

const Hero: React.FC = () => {
  const [missionText, setMissionText] = useState("");
  const [showButtons, setShowButtons] = useState({ btn1: false, btn2: false });
  const fullText = " | Advancing neuroengineering at TUM";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setMissionText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Trigger buttons animation after typing finishes
        setTimeout(() => setShowButtons((prev) => ({ ...prev, btn1: true })), 200);
        setTimeout(() => setShowButtons((prev) => ({ ...prev, btn2: true })), 500);
      }
    }, 50); // Adjust typing speed here (ms)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      style={{
        height: "100%", // Changed to 100% to fit the snap container
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--background)",
        position: "relative",
        // Removed paddingBottom to allow true centering
      }}
    >
      {/* Title Text & Mission Statement Wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "left",
          // Removed negative transform to bring elements down
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(4rem, 15vw, 12rem)",
            lineHeight: 0.9,
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            margin: 0,
            color: "var(--foreground)",
            fontWeight: 400,
          }}
        >
          neuroTUM
        </h1>
        <Link href="/research" style={{ textDecoration: "none" }}>
          <p
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#105fdfff", // Brighter blue
              opacity: 0.9,
              marginTop: "3rem",
              fontWeight: 600,
              minHeight: "1.5em", // Reserve space to prevent layout shift
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
          >
            {missionText}
          </p>
        </Link>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem", alignItems: "flex-start" }}>
          <Link href="/impact" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: 0,
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "var(--foreground)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                // Animation styles
                opacity: showButtons.btn1 ? 1 : 0,
                transform: showButtons.btn1 ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              Our Impact
            </button>
          </Link>
          <Link href="/join" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: 0,
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "var(--foreground)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                // Animation styles
                opacity: showButtons.btn2 ? 1 : 0,
                transform: showButtons.btn2 ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              Become A Member
            </button>
          </Link>
        </div>
      </div>

      {/* ASCII Brain (Background Layer) */}
      <div
        style={{
          position: "absolute",
          top: "50%", // Reset to center
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          pointerEvents: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <pre
          id="ascii-brain"
          className="ascii-hover"
          data-ascii={ASCII_DATA}
          style={{
            fontFamily: "monospace",
            whiteSpace: "pre",
            color: "#ecd5deff",
            background: "transparent",
            padding: 0,
            margin: 0,
            display: "block",
            fontSize: "clamp(6px, 1.2vw, 14px)",
            lineHeight: "clamp(7px, 1.3vw, 15px)",
            textAlign: "center",
            
          }}
        >
          {ASCII_DATA}
        </pre>
      </div>
    </section>
  );
};

export default Hero;