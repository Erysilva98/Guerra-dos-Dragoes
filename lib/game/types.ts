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
  dragon: any; // Will be properly typed with Dragon class
  enemies: any[]; // Will be properly typed with Enemy class
  projectiles: any[]; // Will be properly typed with Projectile class
  score: number;
  health: number;
  shield: number;
  stamina: number;
  environment: string;
}