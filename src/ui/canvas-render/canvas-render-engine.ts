import {
  type Drawable,
  type KeyHandler,
  type MoveHandler,
  type SnakeRenderEngine,
} from '../render-engine';

const scoreHeight = 20;

export class CanvasRenderEngine implements SnakeRenderEngine {
  #context: CanvasRenderingContext2D;
  #canvasElement: HTMLCanvasElement;
  #score = 0;
  #items: Drawable[] = [];

  constructor(parentElementId: string) {
    this.#canvasElement = document.createElement('canvas');
    const context = this.#canvasElement.getContext('2d');
    if (context === null) {
      throw new Error('Canvas context not found');
    }

    this.#context = context;
    this.#canvasElement.width = 500;
    this.#canvasElement.height = 500;
    this.#canvasElement.style.backgroundColor = 'black';
    document.getElementById(parentElementId)?.appendChild(this.#canvasElement);
    this.render();
  }

  render(): void {
    this.#renderBackground();
    this.#renderScore();
    this.#renderItems();
  }

  drawElement(element: Drawable): void {
    this.#items.push(element);
  }

  clearGameScreen(): void {
    this.#items = [];
    this.#context.clearRect(0, 0, this.#canvasElement.width, this.#canvasElement.height);
  }

  showGameOver(): void {
    // eslint-disable-next-line no-alert
    alert('Game Over');
  }

  addExitListener(listener: KeyHandler): void {
    this.addKeyListener('Escape', listener);
  }

  addMoveListener(listener: MoveHandler): void {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      listener({ isCtrl: e.ctrlKey, isShift: e.shiftKey, name: e.key });
    });
  }

  addKeyListener(key: string, listener: KeyHandler): void {
    window.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === key) {
        listener();
      }
    });
  }

  updateScore(score: number): void {
    this.#score = score;
  }

  resetScore(): void {
    this.#score = 0;
  }

  #renderItems() {
    this.#items.forEach(item => {
      const { x, y } = item.getCoordinates();
      this.#context.beginPath();
      this.#context.rect(x, y + scoreHeight, 10, 15);
      this.#context.fillStyle = item.getColor();
      this.#context.fill();
    });
  }

  #renderBackground() {
    this.#context.beginPath();
    this.#context.rect(0, 0, this.#canvasElement.width, this.#canvasElement.height);
    this.#context.fillStyle = 'black';
    this.#context.fill();
  }

  #renderScore() {
    this.#context.beginPath();
    this.#context.rect(0, 0, this.#canvasElement.width, scoreHeight);
    this.#context.fillStyle = 'blue';
    this.#context.fill();
    this.#context.beginPath();
    this.#context.font = '10px serif';
    this.#context.fillStyle = 'white';
    this.#context.fillText(`Score:${this.#score}`, 5, 12, 100);
  }
}
