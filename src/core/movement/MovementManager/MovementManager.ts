import { type Coordinates } from '../../../ui/render-engine';
import { type Board } from '../../Board/Board';
import { Direction } from '../../types.js';
import { DownMovement } from '../DownMovement/DownMovement.js';
import { LeftMovement } from '../LeftMovement/LeftMovement.js';
import { RightMovement } from '../RightMovement/RightMovement.js';
import { UpMovement } from '../UpMovement/UpMovement.js';
import { type MovementStrategy } from './MovementStrategy';

export class MovementManager {
  #direction: Direction = Direction.RIGHT;
  #directionStrategyMap: Map<Direction, MovementStrategy>;
  #oppositeDirectionMap: Map<Direction, Direction>;
  #board: Board;

  constructor(board: Board) {
    this.#board = board;
    this.#directionStrategyMap = new Map<Direction, MovementStrategy>([
      [Direction.UP, new UpMovement()],
      [Direction.DOWN, new DownMovement()],
      [Direction.LEFT, new LeftMovement()],
      [Direction.RIGHT, new RightMovement()],
    ]);
    this.#oppositeDirectionMap = new Map<Direction, Direction>([
      [Direction.UP, Direction.DOWN],
      [Direction.DOWN, Direction.UP],
      [Direction.LEFT, Direction.RIGHT],
      [Direction.RIGHT, Direction.LEFT],
    ]);
  }

  getDirection() {
    return this.#direction;
  }

  setDirection(direction: Direction) {
    if (direction === this.#oppositeDirectionMap.get(this.#direction)) {
      return;
    }

    this.#direction = direction;
  }

  move(coordinates: Coordinates) {
    return this.#directionStrategyMap.get(this.#direction)!.execute(coordinates, this.#board);
  }
}
