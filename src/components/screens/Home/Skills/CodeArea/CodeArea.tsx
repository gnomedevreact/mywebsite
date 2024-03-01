import styles from "./CodeArea.module.scss";
import { Bracket } from "./Parts/Bracket";
import { Char } from "./Parts/Char";
import { Function } from "./Parts/Function";
import { Method } from "./Parts/Method";
import { Naming } from "./Parts/Naming";
import { Row } from "./Parts/Row";
import { Special } from "./Parts/Special";
import { SquareBrackets } from "./Parts/SquareBrackets";
import { String } from "./Parts/String";
import { Text } from "./Parts/Text";

export const CodeArea = () => {
  const data = [
    "Next.js",
    "React",
    "React Native",
    "Node.js",
    "HTML/CSS/JS",
    "Tailwind",
    "Webpack/Gulp/Vite",
    "SCSS/Less",
    "npm/yarn/pnpm",
    "PWA",
    "SSR",
    "SPA",
    "GIT",
    "Web Sockets",
    "PostgreSQL/MongoDB/ORM",
    "UX/UI",
    "TypeScript",
    "NestJS",
    "Cypress",
    "Jest",
  ];

  return (
    <div className={styles.wrap}>
      <Row className={"gap-2"}>
        <Method>class</Method>
        <Naming>MironBrinkovskii</Naming>
        <Bracket text="{" />
      </Row>
      <Row className={"pl-4 gap-2"}>
        <String>
          name
          <Char char=":" />
        </String>
        <Naming>
          string
          <Char char=";" />
        </Naming>
      </Row>
      <Row className={"pl-4 gap-2"}>
        <String>
          email
          <Char char=":" />
        </String>
        <Naming>
          string
          <Char char=";" />
        </Naming>
      </Row>
      <Row className="h-[24px]" />
      <Row className="pl-4 gap-2">
        <Method>
          constructor
          <Special char="(" />
          <Special char=")" />
        </Method>
        <Special char="{" />
      </Row>
      <Row className="pl-8 gap-2">
        <Method>
          this
          <Char char="." />
          <String>name</String>
        </Method>
        <Char char="=" />
        <Text>Miron Brinkovskii</Text>
      </Row>
      <Row className="pl-8 gap-2">
        <Method>
          this
          <Char char="." />
          <String>email</String>
        </Method>
        <Char char="=" />
        <Text>mironbrinkovskiy@gmail.com</Text>
      </Row>
      <Row className="pl-4">
        <Special char="}" />
      </Row>
      <Row className="h-[24px]" />
      <Row className={"pl-4 gap-2"}>
        <Function>
          skills
          <Special char="(" />
          <Special char=")" />
        </Function>
        <Special char="{" />
      </Row>
      <Row className="pl-8 gap-2">
        <Special char="return" />
        <SquareBrackets char="[" />
      </Row>
      <div className="flex flex-wrap pl-12">
        {data.map((item, index) => {
          return (
            <div className="flex items-center" key={index}>
              <Text>{item}</Text>
              {index !== 18 && <Char char="," />}
            </div>
          );
        })}
      </div>
      <Row className="pl-8">
        <SquareBrackets char="]" />
      </Row>
      <Row className="pl-4">
        <Special char="}" />
      </Row>
      <Row>
        <Bracket text="}" />
      </Row>
    </div>
  );
};
