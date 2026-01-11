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
  const [showSubText, setShowSubText] = useState(false);
  const fullText = " | Advancing neuroengineering at TUM";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setMissionText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Trigger mission text visibility after typing finishes
        setTimeout(() => setShowSubText(true), 200);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--background)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "left",
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
              color: "#105fdfff",
              opacity: 0.9,
              marginTop: "3rem",
              fontWeight: 600,
              minHeight: "1.5em",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
          >
            {missionText}
          </p>
        </Link>

        {/* Updated mission statement appearing all at once */}
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "var(--foreground)",
            marginTop: "1.5rem",
            /* Restricted width to avoid overlaying ASCII art */
            maxWidth: "450px", 
            lineHeight: 1.4,
            opacity: showSubText ? 1 : 0,
            transform: showSubText ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          Led by students, we work at the intersection of Neuroscience, Electrical Engineering and Robotics.
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
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