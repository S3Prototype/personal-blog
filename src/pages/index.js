import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import { Typography, Grid, Button } from "@material-ui/core";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
// import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTrail, animated, useSpring } from "react-spring";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import resume from "../../static/files/resume.pdf";
import Project from "../components/Project";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Chip from "@mui/material/Chip";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const animatedHero = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(8em)" },
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 600,
  });
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  });

  return (
    <Layout
      //title={` ${siteConfig.title}`}
      title={`Shaquil Hansford's personal site`}
      description="Shaquil Hansford's personal site."
    >
      <Grid container spacing={2} style={{ padding: "5%" }} className="hero">
        {/*Personal Intro */}
        <Grid item xs={12} lg={6} className="homeIntro">
          <animated.div style={animatedTexts[0]}>
            <Typography variant="h2" gutterBottom>
              <Translate>Hello! I am</Translate>
              <span className="intro__name"> {siteConfig.title}</span>
              {/* <Typography variant="body2">
                <span>{siteConfig.tagline}</span>
              </Typography> */}
            </Typography>
          </animated.div>
          <animated.div style={animatedTexts[1]}>
            <Typography variant="body1">
              <Translate>
                A technical writer and javascript developer who empowers your
                users to do great things with your products. I wrap my head
                around your automation tools, then I write brilliant copy and
                code samples to teach your customers how to do it too.
              </Translate>{" "}
            </Typography>
          </animated.div>
          &nbsp;
          <animated.div style={animatedTexts[2]}>
            <Typography variant="h6" gutterBottom>
              <Translate>Technical Skills:</Translate>
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Chip label="React" variant="filled" color="primary" />
              </Grid>
              <Grid item>
                <Chip label="TypeScript" variant="filled" color="primary" />
              </Grid>
              <Grid item>
                <Chip label="NextJS" variant="filled" color="primary" />
              </Grid>
              <Grid item>
                <Chip label="Git" variant="filled" color="primary" />
              </Grid>
              <Grid item>
                <Chip label="GraphQL" variant="filled" color="primary" />
              </Grid>
              <Grid item>
                <Chip label="MongoDB" variant="filled" color="primary" />
              </Grid>
              <Grid item>
                <Chip label="NodeJS" variant="filled" color="primary" />
              </Grid>
              <Grid item>
                <Chip label="ExpressJS" variant="filled" color="primary" />
              </Grid>
              <Grid item>
                <Chip label="Jest" variant="filled" color="primary" />
              </Grid>
              <Grid item>
                <Chip label="Redis" variant="filled" color="primary" />
              </Grid>
              <Grid item>
                <Chip label="SocketIO" variant="filled" color="primary" />
              </Grid>
            </Grid>
          </animated.div>
          &nbsp;
          <animated.div style={animatedTexts[2]}>
            <Typography variant="h6" gutterBottom>
              <Translate>Docs Skills:</Translate>
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Chip label="Markdown" variant="filled" color="secondary" />
              </Grid>
              <Grid item>
                <Chip
                  label="Docs-as-code workflows"
                  variant="filled"
                  color="secondary"
                />
              </Grid>
              <Grid item>
                <Chip label="Docusaurus" variant="filled" color="secondary" />
              </Grid>
              <Grid item>
                <Chip label="Gitbook" variant="filled" color="secondary" />
              </Grid>
              <Grid item>
                <Chip
                  label="Medium Publications"
                  variant="filled"
                  color="secondary"
                />
              </Grid>
            </Grid>
          </animated.div>
          &nbsp;
          <animated.div style={animatedTexts[2]}>
            <Typography variant="h6" gutterBottom>
              <Translate>Soft Skills:</Translate>
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Chip label="Excellent Communication Skills" variant="filled" />
              </Grid>
              <Grid item>
                <Chip label="Agile Development Experience" variant="filled" />
              </Grid>
              <Grid item>
                <Chip
                  label="Cross-cultural Communication Skills"
                  variant="filled"
                />
              </Grid>
              <Grid item>
                <Chip label="User Experience (UX)" variant="filled" />
              </Grid>
              <Grid item>
                <Chip
                  label="Adamant about advocating for the customer"
                  variant="filled"
                />
              </Grid>
            </Grid>
          </animated.div>
          &nbsp;
          <animated.p style={animatedTexts[3]}>
            <Button
              style={{ textTransform: "none" }}
              color="primary"
              variant="outlined"
              size="small"
              href={resume}
            >
              <Translate>My Resume</Translate>
            </Button>
          </animated.p>
          <SocialLinks animatedProps={animatedTexts[4]} />
        </Grid>

        <Grid item xs={12} lg={6} className="homeImg">
          {/* <img src={useBaseUrl(image)} className="image" /> */}
          <animated.img
            src={useBaseUrl("img/programming.png")}
            style={animatedHero}
          />
        </Grid>
      </Grid>
      <Grid>
        <Experience />
      </Grid>
      <Grid>
        <Projects />
      </Grid>
      <Grid>
        <Contact />
      </Grid>
    </Layout>
  );
}

function SocialLinks({ animatedProps, ...props }) {
  return (
    <animated.div className="social__links" style={animatedProps}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography display={"inline"} gutterBottom>
            Social Media:
          </Typography>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/in/shaquil-hansford/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://github.com/S3Prototype">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Grid>
      </Grid>
    </animated.div>
  );
}

export default Home;
