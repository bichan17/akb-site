import React from "react";
import WorkSegment from "./work-segment";
import PageSection from "./page-section";
import Slide from "./slide";
import TextSegment from "./text-segment";
import TwoColumnSegment from "./two-column-segment";

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
      <PageSection anchor="intro">
        <Slide>
          <TextSegment blocks={_rawIntroCopy} variant={TextSegment.variants.narrow} />
        </Slide>
      </PageSection>

      <PageSection anchor="clients">
        {_rawClientsSlides.map((s) => (
          <Slide key={s._key}>
            <TextSegment blocks={s.textBlock} />
          </Slide>
        ))}
      </PageSection>

      <PageSection anchor="services">
        {_rawServicesSlides.map((s) => (
          <Slide key={s._key}>
            {s._type == "textSlide" && <TextSegment blocks={s.textBlock} />}
            {s._type == "twoColumnSlide" && (
              <TwoColumnSegment leftBlock={s.leftTextBlock} rightBlock={s.rightTextBlock} />
            )}
          </Slide>
        ))}
      </PageSection>

      <PageSection anchor="work">
        <Slide>
          <WorkSegment headline={_rawWorkHeadline} segments={_rawWorkSegments} />
        </Slide>
      </PageSection>
    </main>
  );
};

export default HomePage;
