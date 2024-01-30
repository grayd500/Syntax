import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const textColor = '#FFFFFF';
  const iconColor = '#E53179ff';

  return (
    <footer className="bg-black md:sticky top-0 z-10 p-2 md:p-5">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
        <div className="md:w-full text-center">
          <p className="text-base" style={{ color: textColor }}>
            Let's Get Social:
          </p>
        </div>
        <div className="md:w-full text-center mt-4">
          <nav className="md:mx-auto md:py-1 md:pl-4 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            {/* GitHub Icon */}
            <a
              href="https://github.com/grayd500/Syntax"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 hover:text-white"
            >
              <FaGithubSquare size={32} style={{ color: iconColor }} />
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/pulse/topics/home/?trk=guest_homepage-basic_guest_nav_menu_articles"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 hover:text-white"
            >
              <FaLinkedin size={32} style={{ color: iconColor }} />
            </a>
            {/* Discord Icon */}
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 hover:text-white"
            >
              <FaDiscord size={32} style={{ color: iconColor }} />
            </a>
            {/* Spotify Icon */}
            <a
              href="https://open.spotify.com/playlist/37i9dQZF1EIcwQjfM8Wvly"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 hover:text-white"
            >
              <FaSpotify size={32} style={{ color: iconColor }} />
            </a>
            {/* SoundCloud Icon */}
            <a
              href="https://soundcloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 hover:text-white"
            >
              <FaSoundcloud size={32} style={{ color: iconColor }} />
            </a>
            {/* Apple Music Icon */}
            <a
              href="https://music.apple.com/us/browse"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 hover:text-white"
            >
              <SiApplemusic size={32} style={{ color: iconColor }} />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
