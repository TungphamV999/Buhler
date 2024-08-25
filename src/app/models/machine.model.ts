export interface Machine {
  name: string;
  state: MachineState;
}

export interface MachineVM {
  name: string;
  state: MachineState;
  statusIcon: string;
  machineIcon?: string;
}

export type MachineState = 'Running' | 'Alarm' | 'Warning';
