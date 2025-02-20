import { ActionHash } from '@holochain/client';


export interface GameStats {
  win_distribution: number[];
  games_failed: number;
  current_streak: number;
  best_streak: number;
  total_games: number;
  success_rate: number;
}

export interface UpdateGameStats {
  original_action_hash: ActionHash;
  updated_game_stats: GameStats;
}
