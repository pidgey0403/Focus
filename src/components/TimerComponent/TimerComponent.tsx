import React, { useEffect, useState } from "react";
import { TextContainer } from "./TimerComponent.styles";

export interface TimerProp {
  active: boolean;
  study_time: String;
  seconds: String;
  minute: String;
}

const TimerComponent: React.FC<TimerProp> = ({
  active,
  study_time,
  seconds,
  minute,
}: TimerProp) => {
  return (
    <TextContainer>
      {active ? minute + ":" + seconds : study_time + ":" + seconds}
    </TextContainer>
  );
};

export default TimerComponent;
