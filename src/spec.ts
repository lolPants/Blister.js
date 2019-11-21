export interface IPlaylist {
  title: string
  author: string
  description: string | null

  cover: Buffer
  maps: IBeatmap[]
}

export const enum BeatmapType {
  Key = 0,
  Hash = 1,
  Zip = 2,
  LevelID = 3,
}

export interface IKeyBeatmap {
  type: BeatmapType.Key
  key: number
  hex: () => string
}

export interface IHashBeatmap {
  type: BeatmapType.Hash
  hash: Buffer
  hex: () => string
}

export interface IZipBeatmap {
  type: BeatmapType.Zip
  bytes: Buffer
}

export interface ILevelIDBeatmap {
  type: BeatmapType.LevelID
  levelID: string
}

export interface ICommonBeatmap {
  dateAdded: Date
}

export type IBeatmap = ICommonBeatmap &
  (IKeyBeatmap | IHashBeatmap | IZipBeatmap | ILevelIDBeatmap)
