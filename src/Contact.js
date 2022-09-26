import StyledContanct from "./StyledContact";

const Contact = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContanct>
      <div>
        <h2>Kontakt oss</h2>
        <p>
          Ikke nøl med å ta kontakt dersom du skulle ha spørsmål eller ønsker
          mer informasjon – helt uforpliktende så klart.
        </p>
        <p>
          Trykk{" "}
          <a
            href="mailto:post@sunrisehomes.no"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            her
          </a>{" "}
          for epost eller ring 12345678
        </p>
      </div>
    </StyledContanct>
  );
};

export default Contact;
