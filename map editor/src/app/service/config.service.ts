import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public storageKey = 'scenarioCreatorFilterOptions';
  public filterOptions: any;

  public GROUNDTYPE: any = {
    RANDOM: 0,
    GRASS: 1,
    CURSED: 2,
  }

  public GROUP: any = {
    STARTINGTILE: 0
  }

  public GROUP_DESC: any = {
    STARTINGTILE: "Starting tile"
  }

  public EXPANSION: any = {
    CORE: 0,
  }

  public EXPANSION_CONTENTS: any = {
    "RANDOM": {
      "TOWN": 0,
      "FAR": 0,
      "NEAR": 0,
      "CENTER": 0
    },
  }

  public PORTRAITS: any = {
    CATHERINE: {
      image: "assets/portraits/catherine.png",
      desc: "Catherine"
    }
  }

  public FACTIONS: any = {

  }

  public EXPANSION_FILTER_DESC: any = {
    CORE: "Core",
  }

  public TILES: any = {
    'S1': {
      id: 'S1',
      img: 'S1',
      desc: 'Necropolis Starting tile',
      expansionID: this.EXPANSION.CORE,
      groundType: this.GROUNDTYPE.CURSED,
      group: this.GROUP.STARTINGTILE
    },
  }

  public defaultFilterOptions = {
    "RANDOM": true,
    "CORE": true,
    "TOWER": true,
    "RAMPART": true,
    "FORTRESS": true,
    "INFERNO": true
  }

  constructor(private http: HttpClient) {
    this.GROUNDTYPE = this.objToEnum(this.GROUNDTYPE);
    this.GROUP = this.objToEnum(this.GROUP);
    this.EXPANSION = this.objToEnum(this.EXPANSION);
    this.loadFilterOptions();
  }

  loadFilterOptions() {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.filterOptions = {...this.defaultFilterOptions, ...JSON.parse(data)}
    } else {
      this.saveFilterOptions(this.defaultFilterOptions);
    }
  }

  saveFilterOptions(options) {
    if (options) {
      this.filterOptions = options;
    }
    localStorage.setItem(this.storageKey, JSON.stringify(this.filterOptions));
  }

  objToEnum(obj: any) {
    const res = Object.entries(obj).map(
      ([key, val]) => { return [val, key]; }
    );
    return {...obj, ...Object.fromEntries(res)}
  }

  load() {
    return new Promise((resolve) => {
      this.http.get('assets/json/config.json').subscribe((res) => {
        // setTimeout(() => {
          this.parseData(res);
          resolve(true);
        // }, 5000)
      },(error) => {
        console.warn('Falling back to hardcoded data due to error: ', error)
        resolve(false);
      });
    })
  }

  parseData(data) {
    this.GROUNDTYPE = this.arrayToEnum(data.GROUNDTYPE);
    this.GROUP = this.arrayToEnum(data.GROUP);
    this.GROUP_DESC = data.GROUP_DESC;
    this.EXPANSION = this.arrayToEnum(data.EXPANSION);
    this.EXPANSION_FILTER_DESC = data.EXPANSION_FILTER_DESC;
    this.TILES = {...this.tileJsonToData(data.RANDOM_TILES), ...this.tileJsonToData(data.TILES)};
    this.PORTRAITS = data.PORTRAITS;
    this.FACTIONS = data.FACTIONS;
    this.EXPANSION_CONTENTS = data.EXPANSION_CONTENTS;
  }

  arrayToEnum(arr: Array<any>) {
    const result = {};
    arr.forEach((entry, index) => {
      result[entry] = index;
      result[index] = entry;
    })
    return result;
  }

  tileJsonToData(data: any) {
    const result = Object.entries(data).map(([key, val]: [string, any]) => {
      val.expansionID = this.EXPANSION[val.expansionID.split(".")[1]];
      val.groundType = this.GROUNDTYPE[val.groundType.split(".")[1]];
      val.group = this.GROUP[val.group.split(".")[1]];
      return [key, val];
    });

    return Object.fromEntries(result);
  }

  public getGroupById(tileId: string) {
     return this.TILES[tileId].group;
  }

  public getTilesByGroup(group: string) {
    return Object.values((this.TILES)).filter((tile: any) => {
      return tile.group === group;
    });
  }

  public getTileIDByGroup(group: string) {
    return this.getTilesByGroup(group).map((tile: any) => {
      return tile.id;
    });
  }

  public getTileIDByGroupFilteredBySelectedExpansions(group: string) {
    const list = Object.entries(this.filterOptions).filter(([key, value]) => {
      if(key === 'RANDOM') {return false}
      return value;
    }).map(([key, value]) => {
      return this.EXPANSION[key]
    });
    const selectedExpansions = new Set(list);
    return this.getTilesByGroup(group)
      .filter((tile: any) => {
        return selectedExpansions.has(tile.expansionID);
      })
      .map((tile: any) => {
        return tile.id;
      });
  }
}
