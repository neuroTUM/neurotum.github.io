"use client";

import Footer from "../components/Footer";
import TextBlock from "../components/TextBlock";

export default function ImpressumPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        color: "var(--foreground)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "var(--font-dm-serif)",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 700,
          margin: "4rem 0",
          textAlign: "left",
          padding: "0 1rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.04em",
          }}
        >
          Impressum
        </h1>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.04em",
          }}
        >
          Angaben gemäß § 5 TMG
        </h2>
        <TextBlock styles={{ marginBottom: "1rem" }}>
          Das Impressum dieser Seite gilt auch für die neuroTUM Accounts auf den
          Social-Media-Platformen Instagram und LinkedIn.
        </TextBlock>
        <TextBlock>neuroTUM e.V.</TextBlock>
        <TextBlock>Professur für Neuroeletronik</TextBlock>
        <TextBlock>Technische Universität München</TextBlock>
        <TextBlock styles={{ marginBottom: "1rem" }}>85748 Garching bei München</TextBlock>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.04em",
          }}
        >
          Haftung für Inhalte
        </h2>
        <TextBlock styles={{ marginBottom: "1rem" }}>
          Alle auf dieser Internetseite bereitgestellten Informationen haben wir nach bestem Wissen
          und Gewissen erarbeitet und geprüft. Eine Gewähr für die jederzeitige Aktualität,
          Richtigkeit, Vollständigkeit und Verfügbarkeit der bereit gestellten Informationen können
          wir allerdings nicht übernehmen. Ein Vertragsverhältnis mit den Nutzern des
          Internetangebots kommt nicht zustande. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
          für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
          8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
          eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
          diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
          wir diese Inhalte umgehend entfernen. Der Betreiber behält es sich ausdrücklich vor,
          einzelne Webseiten, Web-Dienste oder das gesamte Angebot ohne gesonderte Ankündigung zu
          verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig
          einzustellen."
        </TextBlock>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.04em",
          }}
        >
          Haftung für Links
        </h2>
        <TextBlock>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
          mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
          ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </TextBlock>
      </section>
      <Footer />
    </div>
  );
}
