declare module 'find-port' {
  function findPort(callback: (ports: number[]) => void): void;
  function findPort(startPort: number, endPort: number, callback: (ports: number[]) => void): void;
  export = findPort;
}
