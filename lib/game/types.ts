export interface DragonStats {
  power: number;
  speed: number;
}

export interface DragonData {
  id: string;
  name: string;
  description: string;
  image: string;
  stats: DragonStats;
}

export interface GameState {
  dragon: any; 
  enemies: any[]; 
  projectiles: any[];
  score: number;
  health: number;
  shield: number;
  stamina: number;
  environment: string;
}
