import React, { useContext } from "react";
import WorkSegment from "./work-segment";
import PageSection from "./page-section";
import TextSegment from "./text-segment";
import TwoColumnSegment from "./two-column-segment";
import ReactFullpage from "@fullpage/react-fullpage";
import { FP_LICENSE } from "../lib/fullpage-license";
import styles from "./home-page.module.css";
import { cn } from "../lib/helpers";
import ContactSegment from "./contact-segment";
import { SectionContext } from "../lib/SectionContext";

const HomePage = (props) => {
  const {
    _rawClientsSlides,
    _rawIntroCopy,
    _rawServicesSlides,
    _rawWorkHeadline,
    _rawWorkSegments,
  } = props;

  const { currentSection, setCurrentSection } = useContext(SectionContext);

  const handleSlideLeave = (origin, destination, direction) => {
    if (destination.anchor) {
      window.history.pushState({}, destination.anchor, `#${destination.anchor}`);
      setCurrentSection(destination.anchor);
    }
  };
  return (
    <main>
      <ReactFullpage
        //fullpage options
        licenseKey={FP_LICENSE}
        scrollingSpeed={800} /* Options here */
        scrollOverflow={true}
        onLeave={(origin, destination, direction) => {
          handleSlideLeave(origin, destination, direction);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <div className={cn(styles.slidesBackground)}>
              <ReactFullpage.Wrapper>
                <PageSection anchor="intro">
                  <TextSegment blocks={_rawIntroCopy} variant={TextSegment.variants.narrow} />
                </PageSection>

                {_rawClientsSlides.map((s, index) => (
                  <PageSection key={s._key} anchor="clients">
                    <TextSegment blocks={s.textBlock} />
                  </PageSection>
                ))}

                {_rawServicesSlides.map((s, index) => (
                  <PageSection key={s._key} anchor="services">
                    {s._type == "textSlide" && <TextSegment blocks={s.textBlock} />}
                    {s._type == "twoColumnSlide" && (
                      <TwoColumnSegment leftBlock={s.leftTextBlock} rightBlock={s.rightTextBlock} />
                    )}
                  </PageSection>
                ))}

                <PageSection anchor="work">
                  <WorkSegment headline={_rawWorkHeadline} segments={_rawWorkSegments} />
                </PageSection>
                <PageSection anchor="contact">
                  <ContactSegment />
                </PageSection>
              </ReactFullpage.Wrapper>
            </div>
          );
        }}
      />
    </main>
  );
};

export default HomePage;
