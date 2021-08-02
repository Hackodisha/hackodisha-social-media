import React from "react";
import {
  FooterContainer,
  SocialMedia,
  WebsiteRights,
} from "./footerElement";

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
          <WebsiteRights>
            Hack Odisha © {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
          </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
