import React from "react";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./socialNetworks.css";

interface SocialNetworksProps {
  instagram?: string;
  youtube?: string;
  tiktok?: string;
}

export default function SocialNetworks({
  instagram,
  youtube,
  tiktok,
}: SocialNetworksProps) {
  return (
    <div className="social-networks">
      <ul>
        {tiktok && (
          <li>
            <NavLink
              to={tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link contact-social-link--tiktok"
              aria-label="TikTok"
            >
              <div className="icon tiktok-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 25 25"
                  fill="currentColor"
                >
                  <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z" />
                </svg>
              </div>
            </NavLink>
          </li>
        )}

        {instagram && (
          <li>
            <NavLink
              to={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link contact-social-link--instagram"
              aria-label="Instagram"
            >
              <InstagramIcon sx={{ fontSize: 38 }} className="icon" />
            </NavLink>
          </li>
        )}

        {youtube && (
          <li>
            <NavLink
              to={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link contact-social-link--youtube"
              aria-label="YouTube"
            >
              <YouTubeIcon sx={{ fontSize: 42 }} className="icon" />
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}