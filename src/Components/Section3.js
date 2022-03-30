import React from "react";
import { InputGroup,Button,FormControl } from "react-bootstrap";

export default function Section3() {
  return (
    <div>
      <div className="section3">
        <div>
          <p className="head">Cruise through backend.</p>
        </div>
        <div>
          <div className="p_1">
            <p className="a1">#1</p>
            <p className="integrations">Choose from 100+ integrations.</p>
            <p className="pera1">
              Vade Studio is designed to work seamlessly with your favourite
              databases or web services. Tweak a template or start from scratch.
              We've baked-in over 100 integrations directly into the platform,
              so you can integrate quickly and easily with other services,
              databases and applications out there.
            </p>
            <div className="page_1"></div>
          </div>
          <div className="p_2">
            <p className="a2">#2</p>
            <p className="config">Configure & Connect.</p>
            <p className="pera2">
              Get all of your data sources connected into a content mesh, in the
              same place, in real time. This provides you a unified API for data
              navigation across all your integrated services.
            </p>
            <div className="page_2"></div>
          </div>
          <div className="p_3">
            <p className="a3">#3</p>
            <p className="test">Test. Build. Deploy.</p>
            <p className="pera3">
              Play around with the generated APIs. Once configured - test, build
              and deploy the unified API into our secure and reliable
              infrastructure. Run your queries in the editor and use our
              intuitive interface to navigate through your data - clean,
              organised & at your fingertips.
            </p>
            <div className="page_3"></div>
          </div>
        </div>
        <div className="line2"></div>
        <p className="b_pera" >We're building an ecosystem where anyone can get inspired with application templates, discover novel ideas from top builders, and
publish revolutionary applications that could change the world.</p>
        <div className="form_b">
        <InputGroup className="inputEarlyAccess_b">
  <FormControl type="text" className="formControl_b" placeholder="email@example.com" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <Button className="btnEarlyAccess_b" type="button" id="button-addon2">Get Early Access</Button>
        </InputGroup>
        </div>
      </div>
    </div>
  );
}
