import React from "react"

export function SummaryPlate() {
  return (
    <>
      <div className="grid grid-cols-3 w-3/4 p-8 rounded-xl bg-white divide-x border-gray-200 border-2 -mt-28 font-serif">
        <div className="px-4 text-center text-wrap">
          <h2 className="text-2xl font-bold">Problem Solver</h2>
          <br></br>
          <p>Complex problems can be broken down into sequences of simple, yet effective solutions. I'm the person who deciphers your problems.</p>
          <br></br>
          <br></br>
          <p className="text-blue-600 font-bold">The type of solutions I provide:</p>
          <p>Web Applications, Desktop Applications, Database Design</p>
          <br></br>
          <br></br>
          <p className="text-blue-600 font-bold">Tools:</p>
          <ul>
            <li>Figma</li>
            <li>Jira</li>
            <li>Confluence</li>
            <li>Github</li>
            <li>Bitbucket</li>
            <li>Git</li>
            <li>Kafka</li> <li>Docker</li> <li>Kubernetes</li>
          </ul>
        </div>
        <div className="px-4 text-center text-wrap">
          <h2 className="text-2xl font-bold">Fullstack Developer</h2>
          <br></br>
          <p>I like to be involved in the entire process. I enjoy bringing your designs to life, as well as building the mechanisms and handling data.</p>
          <br></br>
          <br></br>
          <p className="text-blue-600 font-bold">Languages I utilize:</p>
          <p>Javascript, Typescript, Java, C#, Kotlin, Python, SQL, HTML, CSS</p>
          <br></br>
          <br></br>
          <p className="text-blue-600 font-bold">Environments, Libraries, Frameworks:</p>
          <ul><li>React</li><li>ES6</li><li>Springboot</li> <li>Node.JS</li> <li>Tailwind CSS</li> <li>VS Code</li> <li>IntelliJ</li> <li>Postgres</li> <li>MongoDB</li> <li>Ubuntu</li></ul>
        </div>

        <div className="px-4 text-center text-wrap">
          <h2 className="text-2xl font-bold">Experienced Teamplayer</h2>
          <br></br>
          <p>I have extensive experience working within Agile frameworks, as well as international and cross-cultural communications.</p>
          <br></br>
          <br></br>
          <p className="text-blue-600 font-bold">My Experiences:</p>
          <p>SCRUM, CI/CD, Test Driven Development, Cluster Coordination, Translation, International</p>
          <br></br>
          <br></br>
          <p className="text-blue-600 font-bold">Accomplishments:</p>
          <p>I've worked as a fullstack developer domestically in my home country of the United States, as well as abroad in Europe! I am bilingual, with certified work proficiency in German, and I am actively studying additional languages.
            <br></br>
            <br></br>
            I've successfully headed optimization efforts across several software solutions, some of my most notable metrics being an instance of reducing memory consumption by over 50% and increasing speed by over 80% for the main order handling system of a company.
            <br></br>
            <br></br>
            I successfuly headed a translation team in conjunction with my daily duties as a developer. I led the efforts of localization of over seven langauges for enterprise grade software solutions, working across multiple timezones with my colleagues and reaching across several cultural barriers.
          </p>
        </div>

      </div>

    </>
  )
}
