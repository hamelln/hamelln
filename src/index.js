"use strict";

import navigateWithScroll from "./controllers/click-navigator.js";
import isMobile from "./handlers/mobile-recognizer.js";
import MobileHeader from "./header/MobileHeader.js";
import setupMuteButton from "./ui/mute-button.js";
import setupThemeButton from "./ui/theme-button/index.js";
import renderSelection from "./project/index.js";
import { restoreFocus } from "./handlers/focus-saver.js";
import setupSound from "./controllers/sound-controller.js";

window.addEventListener("load", () => {
  renderSelection();
  isMobile() && MobileHeader();
  setupMuteButton(setupSound);
  setupThemeButton();
  navigateWithScroll();
});

window.addEventListener("focus", restoreFocus);
