"use client";

import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

import { AnimatedSection } from "@/components/shared/AnimatedSection/AnimatedSection";
import { Container } from "@/components/shared/Container/Container";
import { Svg } from "@/components/shared/Svg/Svg";

import styles from "./Contact.module.scss";

export const Contact = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState<Array<string>>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const checkEmail = () => {
    const correct = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      value
    );

    if (correct) {
      setIsEmail(true);
      setErrors([]);
    } else {
      setErrors((prevValue) => [...prevValue, "Nahh, wrong email..."]);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      checkEmail();
    }
  };

  const onKeyDownMess = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsMessage(true);
    }
  };

  return (
    <AnimatedSection id="contact" className={styles.section} once>
      <Container className={styles.wrap}>
        <div>
          <div></div>
          <div>
            Contact me <Svg.Cross />
          </div>
          <div>
            <div>
              <p>Windows Miron Brinkovskii</p>
            </div>
            <div>
              <p>{"Copyright (C) Miron Brinkovskii. All rights reserved."}</p>
            </div>
            <div>
              <p>{"PS C:/Usesr/gnome>"}</p>
              <input
                type="email"
                placeholder="Email ?"
                readOnly={isEmail}
                value={value}
                onChange={onChange}
                onBlur={checkEmail}
                onKeyDown={onKeyDown}
              />
            </div>
            {isEmail && (
              <div>
                <p>{"PS C:/Usesr/gnome>"}</p>
                <input
                  type="text"
                  placeholder="Message for me ?"
                  readOnly={isMessage}
                  onBlur={() => setIsMessage(true)}
                  onKeyDown={onKeyDownMess}
                />
              </div>
            )}
            {isMessage && (
              <div>
                <p>{"PS C:/Usesr/gnome>"}</p>
                <p className={styles.wrapWords}>
                  Thank you for your message, I will contact you soon.. Maybe.
                </p>
              </div>
            )}
            {errors.map((item, index) => (
              <div key={index}>
                <p className={styles.err}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};
