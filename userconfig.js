let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Philadelphia",
    scale: "F",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ed8796",
  },
  disabled: [],
  fastlink: "https://linktr.ee/matt_ftw",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "personal",
      background_url: "src/img/banners/window-room.png",
      categories: [
        {
          name: "media/rrss",
          links: [
          
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: "#f5a97f",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: "#ed8796",
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "mail",
              url: "https://mail.proton.me",
              icon: "brand-campaignmonitor",
              icon_color: "#a6da95",
            },
            {
              name: "calendar",
              url: "https://calendar.proton.me",
              icon: "calendar-filled",
              icon_color: "#f5a97f",
            },
            {
              name: "drive",
              url: "https://drive.proton.me",
              icon: "cloud",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "school",
          links: [
            {
              name: "mymfs",
              url: "https://mfriends.myschoolapp.com/",
              icon: "brand-blackbaud",
              icon_color: "#a6da95",
            },
          ],
        },
        {
          name: "piracy",
          links: [
            {
              name: "aniwave",
              url: "https://aniwave.to/",
              icon: "barrier-block",
              icon_color: "#a6da95",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/retro-mario.png",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: "#a6da95",
            },
            {
              name: "dev-community",
              url: "https://dev.to/",
              icon: "article",
              icon_color: "#f5a97f",
            },
            {
              name: "wakatime",
              url: "https://wakatime.com/dashboard",
              icon: "24-hours",
              icon_color: "#ed8796",
            },
            {
              name: "dotfyle",
              url: "https://dotfyle.com/",
              icon: "puzzle",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "learn",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: "#a6da95",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "#f5a97f",
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "school",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: "#a6da95",
            },
            {
              name: "hoopscotch",
              url: "https://hoppscotch.io/",
              icon: "api",
              icon_color: "#f5a97f",
            },
            {
              name: "searchcode",
              url: "https://searchcode.com/",
              icon: "zoom-code",
              icon_color: "#ed8796",
            },
            {
              name: "codepen",
              url: "https://codepen.io/",
              icon: "brand-codepen",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "docs",
          links: [
            {
              name: "devdocs",
              url: "https://devdocs.io/",
              icon: "books",
              icon_color: "#a6da95",
            },
            {
              name: "mdn",
              url: "https://developer.mozilla.org/en-US/",
              icon: "brand-firefox",
              icon_color: "#f5a97f",
            },
            {
              name: "cheatsheets",
              url: "https://cheatsheets.zip/",
              icon: "file-spreadsheet",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "personal repos",
          links: [
            {
              name: "dotfiles",
              url: "https://github.com/Matt-FTW/dotfiles",
              icon: "palette",
              icon_color: "#a6da95",
            },
            {
              name: "obsidian",
              url: "https://github.com/Matt-FTW/obsidianVault",
              icon: "notes",
              icon_color: "#f5a97f",
            },
            {
              name: "startpage",
              url: "https://github.com/Matt-FTW/startpage",
              icon: "layout-dashboard",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "other repos",
          links: [
            {
              name: "lazyvim",
              url: "https://github.com/LazyVim/LazyVim",
              icon: "code",
              icon_color: "#a6da95",
            },
            {
              name: "hyprland",
              url: "https://github.com/hyprwm/Hyprland",
              icon: "app-window",
              icon_color: "#f5a97f",
            },
            {
              name: "yazi",
              url: "https://github.com/sxyazi/yazi",
              icon: "folder-open",
              icon_color: "#ed8796",
            },
            {
              name: "material-ui apps",
              url: "https://github.com/nyas1/Material-You-app-list",
              icon: "brand-android",
              icon_color: "#8aadf4",
            },
          ],
        },
      ],
    },
    {
      name: "gaming",
      background_url: "src/img/banners/doom-slayer.png",
      categories: [
        {
          name: "stores",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com/",
              icon: "brand-steam",
              icon_color: "#a6da95",
            },
            {
              name: "epic",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: "#f5a97f",
            },
            {
              name: "gog",
              url: "https://www.gog.com",
              icon: "brand-appgallery",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "deals",
          links: [
            {
              name: "GG Deals",
              url: "https://gg.deals/",
              icon: "cash",
              icon_color: "#a6da95",
            },
            {
              name: "r/gameDeals",
              url: "https://www.reddit.com/r/GameDeals/",
              icon: "currency-euro",
              icon_color: "#f5a97f",
            },
          ],
        },
        {
          name: "discussion",
          links: [
            {
              name: "r/gaming",
              url: "https://www.reddit.com/r/gaming/",
              icon: "device-gamepad",
              icon_color: "#a6da95",
            },
            {
              name: "r/indiegaming",
              url: "https://www.reddit.com/r/IndieGaming/",
              icon: "device-gamepad-2",
              icon_color: "#f5a97f",
            },
            {
              name: "r/nintendo",
              url: "https://www.reddit.com/r/nintendo/",
              icon: "device-nintendo",
              icon_color: "#ed8796",
            },
            {
              name: "r/playstation",
              url: "https://www.reddit.com/r/playstation/",
              icon: "playstation-square",
              icon_color: "#8aadf4",
            },
            {
              name: "r/xbox",
              url: "https://www.reddit.com/r/xbox/",
              icon: "brand-xbox",
              icon_color: "#c6a0f6",
            },
          ],
        },
        {
          name: "emulation/download",
          links: [
            {
              name: "vimm's lair",
              url: "https://vimm.net/",
              icon: "door",
              icon_color: "#a6da95",
            },
            {
              name: "roms megathread",
              url: "https://r-roms.github.io/",
              icon: "archive",
              icon_color: "#f5a97f",
            },
            {
              name: "r/emulation",
              url: "https://www.reddit.com/r/emulation/",
              icon: "pacman",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "mods",
          links: [
            {
              name: "nexus mods",
              url: "https://www.nexusmods.com/",
              icon: "hexagons",
              icon_color: "#a6da95",
            },
            {
              name: "modrinth",
              url: "https://www.modrinth.com/",
              icon: "brand-minecraft",
              icon_color: "#f5a97f",
            },
            {
              name: "moddb",
              url: "https://www.moddb.com",
              icon: "file-type-sql",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "rating/tracking",
          links: [
            {
              name: "opencritic",
              url: "https://opencritic.com/",
              icon: "numbers",
              icon_color: "#a6da95",
            },
            {
              name: "RAWG",
              url: "https://rawg.io/",
              icon: "books",
              icon_color: "#f5a97f",
            },
          ],
        },
      ],
    },
    {
      name: "mus ic",
      background_url: "src/img/banners/lofi.jpg",
      categories: [
        {
          name: "listen",
          links: [
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: "#a6da95",
            },
            {
              name: "soundcloud",
              url: "https://www.soundcloud.com",
              icon: "brand-soundcloud",
              icon_color: "#f5a97f",
            },
            {
              name: "genius",
              url: "https://genius.com/",
              icon: "abc",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "rating/tracking",
          links: [
            {
              name: "AOTY",
              url: "https://www.albumoftheyear.org/",
              icon: "calendar-time",
              icon_color: "#a6da95",
            },
            {
              name: "rateyourmusic",
              url: "https://rateyourmusic.com/",
              icon: "stars-off",
              icon_color: "#f5a97f",
            },
            {
              name: "lastfm",
              url: "https://www.last.fm",
              icon: "brand-lastfm",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "discussion",
          links: [
            {
              name: "r/musicproduction",
              url: "https://www.reddit.com/r/musicproduction/",
              icon: "device-speaker",
              icon_color: "#a6da95",
            },
            {
              name: "r/hiphopheads",
              url: "https://www.reddit.com/r/hiphopheads/",
              icon: "headphones",
              icon_color: "#f5a97f",
            },
            {
              name: "r/audiophile",
              url: "https://www.reddit.com/r/audiophile/",
              icon: "ear",
              icon_color: "#ed8796",
            },
            {
              name: "r/music",
              url: "https://www.reddit.com/r/music/",
              icon: "music-heart",
              icon_color: "#8aadf4",
            },
            {
              name: "r/metal",
              url: "https://www.reddit.com/r/metal/",
              icon: "guitar-pick",
              icon_color: "#c6a0f6",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "freesound",
              url: "https://freesound.org/",
              icon: "volume",
              icon_color: "#a6da95",
            },
            {
              name: "pluginboutique",
              url: "https://www.pluginboutique.com/",
              icon: "building-store",
              icon_color: "#f5a97f",
            },
            {
              name: "pianobook",
              url: "https://www.pianobook.co.uk",
              icon: "piano",
              icon_color: "#ed8796",
            },
            {
              name: "musescore",
              url: "https://musescore.com/",
              icon: "numbers",
              icon_color: "#8aadf4",
            },
            {
              name: "songsterr",
              url: "https://www.songsterr.com/",
              icon: "vinyl",
              icon_color: "#c6a0f6",
            },
          ],
        },
      ],
    },
    {
      name: "art",
      background_url: "src/img/banners/sky.png",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "unsplash",
              url: "https://unsplash.com",
              icon: "brand-unsplash",
              icon_color: "#a6da95",
            },
            {
              name: "pixiv",
              url: "https://www.pixiv.net/en/",
              icon: "artboard",
              icon_color: "#f5a97f",
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "brand-pinterest",
              icon_color: "#ed8796",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com",
              icon: "pencil-heart",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "palettes",
          links: [
            {
              name: "catppuccin",
              url: "https://catppuccin.com/",
              icon: "heart",
              icon_color: "#a6da95",
            },
            {
              name: "nord",
              url: "https://www.nordtheme.com/",
              icon: "brand-nord-vpn",
              icon_color: "#f5a97f",
            },
            {
              name: "dracula",
              url: "https://draculatheme.com/",
              icon: "bat",
              icon_color: "#ed8796",
            },
            {
              name: "rose-pine",
              url: "https://rosepinetheme.com/",
              icon: "flower",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "palette-converter",
              url: "https://farbenfroh.io/",
              icon: "adjustments",
              icon_color: "#a6da95",
            },
            {
              name: "excalidraw",
              url: "https://excalidraw.com/",
              icon: "pencil",
              icon_color: "#f5a97f",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
