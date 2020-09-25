/*** EXPORTED TYPES */
export type Series = {
  startDate: string
  endDate: string
  homeTeam: string
  visitingTeam: string
  targetTeam?: string
  seriesId: string
  homeWins: number
  visitingWins: number
  seriesName: string | undefined
}

export type Season = {
  name: string
  targetTeam: string
  series: Series[]
}

export type SeriesGames = {
  seriesInfo: {
    seriesName: string | undefined
    homeTeam: string
    visitingTeam: string
    startDate: string
    endDate: string
  }
  games: ListGame[]
}

export type PitcherEntry = {
  player: Player
  stats: PitchingStats
}

export type AtBatResult =
  | PutOut
  | FlyOut
  | LineOut
  | Hit
  | PitcherResult
  | DefensiveError
  | FieldersChoice

export type BaseResult = {
  advanced: boolean
  result: BaseResultResult
  isAtBatResult?: boolean
  onBasePutout?: PutOut | PickOff
}

export type AtBat = {
  balls: number
  strikes: number
  pitchCount: number
  isOut: boolean
  result: AtBatResult | undefined
  bases: BaseResult[]
  isSacrifice?: boolean
}

export type FieldPosition = number | string

export type Lineup = LineupEntry[][]

export type Game = {
  id: string
  lineups: { home: Lineup; visiting: Lineup }
  pitchers: { home: PitcherEntry[]; visiting: PitcherEntry[] }
  gameplay: Gameplay
  gameInfo: GameInfo
  stats: {
    home: Stats
    visiting: Stats
  }
}

type ListType = 'category' | 'season'

export type List = {
  name: string
  description: string
  listId: string
  type: ListType
}

export type Category = {
  categoryName: string
  games: ListGame[]
}

export type ListGame = {
  date: string
  homeTeam: string
  visitingTeam: string
  matchup: string
  id: string
  gameDescription: string
  location: string
  homeScore: number
  visitingScore: number
}

type Team = {
  fullName: string
  abbreviation: string
}
type GameInfo = {
  homeTeam: Team
  visitingTeam: Team
  date: string
  location: string
  startTime: string
  id: string
}
export type LineupPlayer = {
  name: string
  number?: number | undefined
}

type LineupEntry = {
  player: LineupPlayer
  position: FieldPosition
  inning: number
}

type Base = 1 | 2 | 3 | 4
type AdvanceableBase = 2 | 3 | 4
type PutOut = { type: 'putout'; result: number[]; display: string }
type FlyOut = {
  type: 'flyout'
  result: number
  display: string
}
type LineOut = { type: 'lineout'; result: number; display: string }
type Hit = { type: 'hit'; result: Base; display: string }
type PitcherResultString = 'K' | 'K-looking' | 'BB' | 'IBB' | 'HBP'
type PitcherResult = {
  type: 'pitcher-result'
  result: PitcherResultString
  display: string
}
type DefensiveError = {
  type: 'defensive-error'
  result: number
  display: string
}

type CaughtStealing = {
  type: 'caught-stealing'
  result: PutOut
  display: string
}

type StolenBase = {
  type: 'stolen-base'
  result: AdvanceableBase
  display: 'SB'
}

type DefensiveIndifference = {
  type: 'defensive-indifference'
  result: 'DI'
  display: 'DI'
}

type FieldersChoice = {
  type: 'fielders-choice'
  result: Base
  display: 'FC'
}

type PassedBall = {
  type: 'passed-ball'
  result: 'PB'
  display: 'PB'
}

type WildPitch = {
  type: 'wild-pitch'
  result: 'WP'
  display: 'WP'
}

type Balk = {
  type: 'balk'
  result: 'BK'
  display: 'BK'
}

type PickOff = {
  type: 'pick-off'
  result: PutOut
  display: string
}

type AdvanceBaseResult =
  | DefensiveError
  | FieldersChoice
  | Balk
  | StolenBase
  | DefensiveIndifference
  | PassedBall
  | WildPitch

export type OutBaseResult = PutOut | CaughtStealing
export type BaseResultResult = AdvanceBaseResult | OutBaseResult | undefined

type Gameplay = {
  home: AtBat[][]
  visiting: AtBat[][]
}

type Player = {
  id: string
  name: string
  position: number
  type: 'sub' | 'start'
  inningEntered: number
}

type PitchingStats = {
  er: number
}

type Stats = {
  scoring: number[]
  runs: number
  hits: number
  errors: number
}
