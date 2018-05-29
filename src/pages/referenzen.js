import React from "react";
import Reference from "../components/Reference";
const Referenzen = () => (
  <main>
    <Reference
      title="Studentenwerk Schleswig-Holstein, Kiel"
      subtitle=""
      leistungen={["Gebäudereinigung"]}
    />
    <Reference
      title="Abfallwirtschaft Schleswig-Flensburg, Schleswig:"
      leistungen={["Unterhaltsreinigung"]}
    />
    <Reference
      title="Service-Betrieb des Kreises Schleswig-Flensburg, Schleswig:"
      leistungen={["Unterhaltsreinigung"]}
    />
  </main>
);

export default Referenzen;
