export interface ReadLineNodeMenu {
  question(question: string, callback: (answer: string) => void): void;
  log(message: string): void;
  close(): void;
}
