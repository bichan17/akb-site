import React from "react";
import WorkSegment from "./work-segment";
import PageSection from "./page-section";
import TextSegment from "./text-segment";
import TwoColumnSegment from "./two-column-segment";
import ReactFullpage from "@fullpage/react-fullpage";
import { FP_LICENSE } from "../lib/fullpage-license";

const HomePage = (props) => {
  const {
    _rawClientsSlides,
    _rawIntroCopy,
    _rawServicesSlides,
    _rawWorkHeadline,
    _rawWorkSegments,
  } = props;

  return (
    <main>
      <ReactFullpage
        //fullpage options
        licenseKey={FP_LICENSE}
        scrollingSpeed={1000} /* Options here */
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <PageSection anchor="intro">
                <TextSegment blocks={_rawIntroCopy} variant={TextSegment.variants.narrow} />
              </PageSection>

              {_rawClientsSlides.map((s, index) => (
                <PageSection key={s._key} anchor={index === 0 ? "clients" : null}>
                  <TextSegment blocks={s.textBlock} />
                </PageSection>
              ))}

              {_rawServicesSlides.map((s, index) => (
                <PageSection key={s._key} anchor={index === 0 ? "services" : null}>
                  {s._type == "textSlide" && <TextSegment blocks={s.textBlock} />}
                  {s._type == "twoColumnSlide" && (
                    <TwoColumnSegment leftBlock={s.leftTextBlock} rightBlock={s.rightTextBlock} />
                  )}
                </PageSection>
              ))}

              <PageSection anchor="work">
                <WorkSegment headline={_rawWorkHeadline} segments={_rawWorkSegments} />
              </PageSection>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  );
};

export default HomePage;
