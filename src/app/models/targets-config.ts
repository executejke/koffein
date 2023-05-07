import {ITargetsConfig} from "../interfaces/i-targets-config";

export class TargetsConfig {
  public isNew: boolean;
  public zeroProgressLabel: string;

  constructor(config: ITargetsConfig) {
    this.isNew = config.isNew ?? false
    this.zeroProgressLabel = config.zeroProgressLabel ?? ''
  }
}
