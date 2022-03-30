import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faGear,
  faVolumeMute,
  faArrowTurnRight,faPlay
} from "@fortawesome/free-solid-svg-icons";
import { InputGroup,Button,FormControl } from "react-bootstrap";

export default function Section1() {
  return (
    <>
      <div>
        <p className="h2">
          Get ridiculously creative with your products and let us do the hard
          work for you!
        </p>
        <p className="h1">Integrate APIs In Minutes</p>
        <InputGroup className="inputEarlyAccess">
  <FormControl type="text" className="formControl" placeholder="email@example.com" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <Button className="btnEarlyAccess" type="button" id="button-addon2">Get Early Access</Button>
        </InputGroup>
      </div>
      <div className="box0">
        <div className="box1">
          <div>
          <FontAwesomeIcon
            className="target"
            icon={faRightToBracket}
          ></FontAwesomeIcon>
          <FontAwesomeIcon className="gear" icon={faGear}></FontAwesomeIcon>
          <FontAwesomeIcon
            className="mute"
            icon={faVolumeMute}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="arrow_right"
            icon={faArrowTurnRight}
          ></FontAwesomeIcon>
          </div>
          <div className="youtube">
          <FontAwesomeIcon className="play" icon={faPlay}/>
          </div>

          <div className="arrow"></div>

        </div>
      </div>
    </>
  );
}
