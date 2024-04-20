import {Unit} from "./data";
import {SPECIALS} from "./specials";

export const NEUTRAL: Unit[] = [{
  id: 'AZURE_DRAGONS *',
  attack: 8,
  defence: 3,
  health: 10,
  initiative: 19,
  ranged: false,
  special: [SPECIALS.IGNORE_DAMAGE_FROM_SPECIALS_AND_MAGIC, SPECIALS.FEAR],
  upgradeFrom: "",
  costs: [45,2],
  faction: "Neutral",
  tier: "Azure"
},{
  id: 'RUST_DRAGONS *',
  attack: 7,
  defence: 3,
  health: 10,
  initiative: 17,
  ranged: false,
  special: [SPECIALS.RUST_ATTACK],
  upgradeFrom: "",
  costs: [38,2],
  faction: "Neutral",
  tier: "Azure"
},{
  id: 'CRYSTAL_DRAGONS *',
  attack: 7,
  defence: 3,
  health: 9,
  initiative: 16,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [40,2],
  faction: "Neutral",
  tier: "Azure"
},{
  id: 'FAERIE_DRAGONS *',
  attack: 5,
  defence: 2,
  health: 8,
  initiative: 15,
  ranged: false,
  special: [SPECIALS.FAERIE_SPELL_ATTACK],
  upgradeFrom: "",
  costs: [35,2],
  faction: "Neutral",
  tier: "Azure"
},{
  id: 'TROLLS *',
  attack: 4,
  defence: 0,
  health: 7,
  initiative: 7,
  ranged: false,
  special: [SPECIALS.HEAL_THREE_ON_ACTIVATION],
  upgradeFrom: "",
  costs: [13,0],
  faction: "Neutral",
  tier: "Gold"
},{
  id: 'GOLD_GOLEMS *',
  attack: 3,
  defence: 2,
  health: 6,
  initiative: 5,
  ranged: false,
  special: [SPECIALS.SPELL_REDUCTION_TWO],
  upgradeFrom: "",
  costs: [14,0],
  faction: "Neutral",
  tier: "Gold"
},{
  id: 'DIAMOND_GOLEMS *',
  attack: 4,
  defence: 2,
  health: 6,
  initiative: 6,
  ranged: false,
  special: [SPECIALS.SPELL_REDUCTION_THREE],
  upgradeFrom: "",
  costs: [16,0],
  faction: "Neutral",
  tier: "Gold"
},{
  id: 'ENCHANTERS *',
  attack: 4,
  defence: 1,
  health: 5,
  initiative: 5,
  ranged: true,
  special: [SPECIALS.ENCHANTER],
  upgradeFrom: "",
  costs: [16,0],
  faction: "Neutral",
  tier: "Gold"
},{
  id: 'SHARPSHOOTER *',
  attack: 3,
  defence: 0,
  health: 6,
  initiative: 9,
  ranged: true,
  special: [SPECIALS.IGNORE_COMBAT_PENALTY],
  upgradeFrom: "",
  costs: [10,0],
  faction: "Neutral",
  tier: "Silver"
},{
  id: 'NOMADS *',
  attack: 3,
  defence: 1,
  health: 4,
  initiative: 7,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [10,0],
  faction: "Neutral",
  tier: "Silver"
},{
  id: 'MUMMIES *',
  attack: 3,
  defence: 1,
  health: 4,
  initiative: 5,
  ranged: false,
  special: [SPECIALS.NO_ROLL_FOR_ATTACK, SPECIALS.CURSE],
  upgradeFrom: "",
  costs: [8,0],
  faction: "Neutral",
  tier: "Silver"
},{
  id: 'ROGUES *',
  attack: 2,
  defence: 1,
  health: 3,
  initiative: 6,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [5,0],
  faction: "Neutral",
  tier: "Bronze"
},{
  id: 'BOARS *',
  attack: 2,
  defence: 0,
  health: 4,
  initiative: 6,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [4,0],
  faction: "Neutral",
  tier: "Bronze"
},{
  id: 'HALFLINGS *',
  attack: 2,
  defence: 0,
  health: 3,
  initiative: 6,
  ranged: true,
  special: [SPECIALS.IGNORE_COMBAT_PENALTY, SPECIALS.LUCK],
  upgradeFrom: "",
  costs: [5,0],
  faction: "Neutral",
  tier: "Bronze"
},{
  id: 'PEASANTS *',
  attack: 1,
  defence: 0,
  health: 3,
  initiative: 3,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [3,0],
  faction: "Neutral",
  tier: "Bronze"
}]