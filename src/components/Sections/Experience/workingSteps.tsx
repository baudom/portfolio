import { Fragment, ReactElement } from "react";

type Certificate = {
  name: string;
  path: string;
};

type CompanyWorkingStep = {
  company: string;
  title: string;
  duration: string;
  descriptions: ReactElement[];
  certificates?: Certificate[];
};

const workingSteps: CompanyWorkingStep[] = [
  {
    company: "AraCom IT Services GmbH",
    title: "Professional Softwareentwickler",
    duration: "seit 2023",
    descriptions: [
      <Fragment key="pro-total">
        <b>Eigenverantwortliche Beratung, Design</b> und&nbsp;
        <b>Entwicklung</b> in Kundenprojekten
      </Fragment>,
      <Fragment key="pro-performance">
        <b>Performance-Optimierung</b> von Datenbank und Service,&nbsp;
        <b>Open Telemetry</b>
      </Fragment>,
      <Fragment key="pro-internal-dev">
        <b>Konzeption</b> und <b>Entwicklung</b> interner
        Software,&nbsp;Vorantreiben von <b>Tech-Communities</b>
        &nbsp;zum <b>Wissenstransfer</b>
      </Fragment>,
      <Fragment key="pro-devops">
        Tieferer Einblick in <b>Automatisierungsprozesse, DevOps</b>
      </Fragment>,
      <Fragment key="pro-support">
        <b>Unterstützung</b> in der Ausbildung
      </Fragment>,
    ],
  },
  {
    company: "AraCom IT Services GmbH",
    title: "Junior Softwareentwickler",
    duration: "2022-2023",
    descriptions: [
      <Fragment key="junior-working">
        <b>Mitentwicklung</b> an Bestandsprojekten in&nbsp;
        <b>teamorientierten</b> und <b>agilen</b> Umfeld
      </Fragment>,
      <Fragment key="junior-modern-frameworks">
        <b>Weiterbildung</b> in <b>modernen Frameworks</b> und&nbsp;
        <b>Technologien</b>
      </Fragment>,
      <Fragment key="junior-testing">
        Sammlung von <b>Best-Practices</b> in&nbsp;
        <b>Test-Automatisierungen</b>
      </Fragment>,
    ],
  },
  {
    company: "AraCom IT Services GmbH",
    title: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung",
    duration: "2019-2022",
    descriptions: [
      <Fragment key="azubi-1">
        <b>Erstkontakt</b> zur Programmierung, <b>starke Lernkurve</b>
        &nbsp; durch Förderung vom Ausbildungsbetrieb
      </Fragment>,
      <Fragment key="azubi-2">
        Abschlussprüfung <b>IHK 90 von 100</b> Punkten; Berufsschulnote&nbsp;
        <b>1,3</b>
      </Fragment>,
    ],
    // certificates: [
    //     {
    //         name: "Udemy - React Native + Hooks",
    //         path: "/documents/ud_complete-react-native-hooks-2020.pdf",
    //     },
    //     {
    //         name: "Udemy - Node.js Backend Development",
    //         path: "/documents/ud_nodejs-backend-development.pdf",
    //     },
    //     {
    //         name: "Udemy - SQL Data Analytics",
    //         path: "/documents/ud_sql-data-analytics-tsql.pdf",
    //     },
    // ],
  },
];

export default workingSteps;
