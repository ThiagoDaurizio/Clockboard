import { 
  FaGithub as IconGithub, 
  FaSpotify as IconSpotify, 
  FaYoutube as IconYoutube, 
  FaRegEdit as IconEdit
} from "react-icons/fa";

import { 
  FaGitlab as IconGitlab 
} from "react-icons/fa6";

import { 
  IoIosGitBranch as IconGitBranch, 
  IoIosMusicalNotes as IconMusic, 
  IoIosCheckmarkCircleOutline  as IconAccept, 
  IoIosCloseCircleOutline as IconDecline,
  IoIosSearch  as IconSearch 
} from "react-icons/io";

import { 
  IoSettingsOutline as IconSettings, 
  IoTrashOutline as IconDelete, 
  IoAddOutline as IconAdd, 
  IoChatboxEllipsesOutline as IconChat,
  IoGameControllerOutline  as IconPlay,
  IoLogoElectron as IconReact,
  IoArrowUp as IconArrowToUp,
  IoEyeOutline as IconSightOn,
  IoEyeOffOutline as IconSightOff,
  IoFileTrayStackedOutline  as IconCreateNote
} from "react-icons/io5";




import { IoIosPower as AppLogo } from "react-icons/io";

export const IconsApp = {
  logo: AppLogo,
  add: IconAdd,
  edit: IconEdit,
  delete: IconDelete,
  accept: IconAccept,
  decline: IconDecline,
  search: IconSearch,
  arrowToUp: IconArrowToUp,
  sightOn: IconSightOn,
  sightOff: IconSightOff,
  createNote: IconCreateNote
}

export const IconsMenu = {
  gitbranch: IconGitBranch,
  gitlab: IconGitlab,
  github: IconGithub,
  music: IconMusic,
  spotify: IconSpotify,
  youtube: IconYoutube,
  settings: IconSettings,
  chat: IconChat,
  play: IconPlay,
  react: IconReact
}
