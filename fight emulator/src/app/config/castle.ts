import {Unit} from "./data";
import {SPECIALS} from "./specials";

export const CASTLE: Unit[] = [{
  id: 'HALBERDIERS',
  attack: 2,
  defence: 1,
  health: 2,
  initiative: 4,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [2,0],
  faction: "Castle",
  tier: "Bronze"
},{
  id: 'HALBERDIERS_#PACK',
  attack: 3,
  defence: 1,
  health: 2,
  initiative: 5,
  ranged: false,
  special: [],
  upgradeFrom: "HALBERDIERS",
  costs: [3,0],
  faction: "Castle",
  tier: "Bronze"
},{
  id: 'MARKSMEN',
  attack: 2,
  defence: 0,
  health: 2,
  initiative: 4,
  ranged: true,
  special: [],
  upgradeFrom: "",
  costs: [3,0],
  faction: "Castle",
  tier: "Bronze"
},{
  id: 'MARKSMEN_#PACK',
  attack: 2,
  defence: 0,
  health: 2,
  initiative: 6,
  ranged: true,
  special: [SPECIALS.DOUBLE_ATTACK_NON_ADJACENT],
  upgradeFrom: "MARKSMEN",
  costs: [5,0],
  faction: "Castle",
  tier: "Bronze"
},{
  id: 'GRIFFINS',
  attack: 2,
  defence: 0,
  health: 4,
  initiative: 6,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [4,0],
  faction: "Castle",
  tier: "Bronze"
},{
  id: 'GRIFFINS_#PACK',
  attack: 3,
  defence: 0,
  health: 4,
  initiative: 9,
  ranged: false,
  special: [],
  upgradeFrom: "GRIFFINS",
  costs: [6,0],
  faction: "Castle",
  tier: "Bronze"
},{
  id: 'CRUSADERS',
  attack: 3,
  defence: 2,
  health: 4,
  initiative: 5,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [6,0],
  faction: "Castle",
  tier: "Silver"
},{
  id: 'CRUSADERS_#PACK',
  attack: 4,
  defence: 2,
  health: 4,
  initiative: 6,
  ranged: false,
  special: [SPECIALS.REROLL_ZERO_ON_DICE],
  upgradeFrom: "CRUSADERS",
  costs: [10,0],
  faction: "Castle",
  tier: "Silver"
},{
  id: 'ZEALOTS',
  attack: 3,
  defence: 1,
  health: 4,
  initiative: 4,
  ranged: true,
  special: [],
  upgradeFrom: "",
  costs: [8,0],
  faction: "Castle",
  tier: "Silver"
},{
  id: 'ZEALOTS_#PACK',
  attack: 4,
  defence: 1,
  health: 5,
  initiative: 7,
  ranged: true,
  special: [SPECIALS.IGNORE_COMBAT_PENALTY_ADJACENT],
  upgradeFrom: "ZEALOTS",
  costs: [12,0],
  faction: "Castle",
  tier: "Silver"
},{
  id: 'CHAMPIONS',
  attack: 5,
  defence: 2,
  health: 7,
  initiative: 7,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [12,0],
  faction: "Castle",
  tier: "Gold"
},{
  id: 'CHAMPIONS_#PACK',
  attack: 6,
  defence: 2,
  health: 7,
  initiative: 9,
  ranged: false,
  special: [SPECIALS.REROLL_ON_OTHER_SPACE],
  upgradeFrom: "CHAMPIONS",
  costs: [20,1],
  faction: "Castle",
  tier: "Gold"
},{
  id: 'ARCHANGELS',
  attack: 6,
  defence: 3,
  health: 8,
  initiative: 12,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [20,1],
  faction: "Castle",
  tier: "Gold"
},{
  id: 'ARCHANGELS_#PACK',
  attack: 7,
  defence: 3,
  health: 10,
  initiative: 18,
  ranged: false,
  special: [],
  upgradeFrom: "ARCHANGELS",
  costs: [30,2],
  faction: "Castle",
  tier: "Gold"
}]
