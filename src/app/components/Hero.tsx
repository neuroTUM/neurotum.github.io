"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const MOBILE_BREAKPOINT = 768;

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
  const [isMobile, setIsMobile] = useState(false);
  const fullText = " | Advancing neuroengineering at TUM";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setMissionText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      style={{
        height: isMobile ? "auto" : "100%",
        minHeight: isMobile ? "50vw" : undefined, /* mobile: minimum section height */
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--background)",
        position: "relative",
        /* mobile padding: top/bottom gap between hero and neighboring sections */
        padding: isMobile ? "7rem 0" : 0,
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
          padding: isMobile ? "0 1.5rem" : 0,
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
              fontSize: isMobile ? "clamp(1.1rem, 4.5vw, 1.5rem)" : "clamp(1.8rem, 3vw, 2.5rem)",
              color: "var(--color-blue)",
              opacity: 0.9,
              marginTop: isMobile ? "1.5rem" : "3rem",
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
      </div>

      {/* ASCII brain art — stretched wider via scaleX for natural proportions */}
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
            fontSize: "clamp(7px, 1.2vw, 16px)",
            lineHeight: "clamp(7px, 1.3vw, 15px)",
            textAlign: "left",
          }}
        >
          {ASCII_DATA}
        </pre>
      </div>
    </section>
  );
};

export default Hero;
