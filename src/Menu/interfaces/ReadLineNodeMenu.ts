export interface ReadLineNodeMenu {
  question(question: string, callback: (answer: string) => void): void;
  close(): void;
}
