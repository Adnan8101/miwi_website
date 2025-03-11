declare module 'find-port' {
  function findPort(startPort: number, endPort: number, callback: (ports: number[]) => void): void;
  export = findPort;
}
