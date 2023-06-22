import { type GameLoop } from './GameLoop';

export interface LifeCycle {
  start(): void;
  stop(): void;
}

export interface ResetPhase {
  addResetHandler(resetHandler: GameLoopHandler): string;
  removeResetHandler(resetHandlerId: string): void;
}

export interface AdvancePhase {
  addAdvanceHandler(advanceable: GameLoopHandler): string;
  removeAdvanceHandler(advanceHandlerId: string): void;
}

export interface CollisionPhase {
  addCollisionHandler(collisionHandler: GameLoopHandler): string;
  removeCollisionHandler(collisionHandlerId: string): void;
}

export interface RenderPhase {
  addRenderHandler(renderHandler: GameLoopHandler): string;
  removeRenderHandler(renderHandlerId: string): void;
}

export type GameLoopHandler = (gameLoop: GameLoop) => void;
