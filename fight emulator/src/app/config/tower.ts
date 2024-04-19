import { Unit } from "./data";
import { SPECIALS } from "./specials";


export const TOWER: Unit[] = [{
  id: 'GREMLINS',
  attack: 2,
  defence: 0,
  health: 2,
  initiative: 4,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [0,0],
  faction: "Tower",
  tier: "Bronze"
},{
  id: 'GREMLINS_#PACK',
  attack: 2,
  defence: 0,
  health: 2,
  initiative: 5,
  ranged: true,
  special: [],
  upgradeFrom: "GREMLINS",
  costs: [2,0],
  faction: "Tower",
  tier: "Bronze"
},{
  id: 'GARGOYLES',
  attack: 2,
  defence: 1,
  health: 3,
  initiative: 6,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [3,0],
  faction: "Tower",
  tier: "Bronze"
},{
  id: 'GARGOYLES_#PACK',
  attack: 3,
  defence: 1,
  health: 3,
  initiative: 9,
  ranged: false,
  special: [],
  upgradeFrom: "GARGOYLES",
  costs: [4,0],
  faction: "Tower",
  tier: "Bronze"
},{
  id: 'IRON_GOLEMS',
  attack: 3,
  defence: 1,
  health: 3,
  initiative: 4,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [4,0],
  faction: "Tower",
  tier: "Bronze"
},{
  id: 'IRON_GOLEMS_#PACK',
  attack: 3,
  defence: 2,
  health: 3,
  initiative: 5,
  ranged: false,
  special: [],
  upgradeFrom: "GOLEMS",
  costs: [7,0],
  faction: "Tower",
  tier: "Bronze"
},{
  id: 'MAGI',
  attack: 3,
  defence: 0,
  health: 4,
  initiative: 5,
  ranged: true,
  special: [SPECIALS.IGNORE_COMBAT_PENALTY_ADJACENT],
  upgradeFrom: "",
  costs: [6,0],
  faction: "Tower",
  tier: "Silver"
},{
  id: 'MAGI_#PACK',
  attack: 4,
  defence: 1,
  health: 4,
  initiative: 6,
  ranged: true,
  special: [SPECIALS.IGNORE_COMBAT_PENALTY_ADJACENT],
  upgradeFrom: "MAGI",
  costs: [11,0],
  faction: "Tower",
  tier: "Silver"
},{
  id: 'GENIES',
  attack: 3,
  defence: 1,
  health: 6,
  initiative: 7,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [8,0],
  faction: "Tower",
  tier: "Silver"
},{
  id: 'GENIES_#PACK',
  attack: 4,
  defence: 1,
  health: 6,
  initiative: 8,
  ranged: false,
  special: [],
  upgradeFrom: "GENIES",
  costs: [12,0],
  faction: "Tower",
  tier: "Silver"
},{
  id: 'NAGAS',
  attack: 5,
  defence: 2,
  health: 7,
  initiative: 6,
  ranged: false,
  special: [SPECIALS.IGNORE_RETALIATION],
  upgradeFrom: "",
  costs: [13,0],
  faction: "Tower",
  tier: "Gold"
},{
  id: 'NAGAS_#PACK',
  attack: 6,
  defence: 2,
  health: 7,
  initiative: 8,
  ranged: false,
  special: [SPECIALS.IGNORE_RETALIATION],
  upgradeFrom: "NAGAS",
  costs: [18,1],
  faction: "Tower",
  tier: "Gold"
},{
  id: 'TITANS',
  attack: 6,
  defence: 3,
  health: 8,
  initiative: 7,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [18,1],
  faction: "Tower",
  tier: "Gold"
},{
  id: 'TITANS_#PACK',
  attack: 6,
  defence: 3,
  health: 8,
  initiative: 11,
  ranged: true,
  special: [SPECIALS.IGNORE_COMBAT_PENALTY_ADJACENT],
  upgradeFrom: "TITANS",
  costs: [32,2],
  faction: "Tower",
  tier: "Gold"
},]
