export interface Machine {
  name: string;
  state: MachineState;
}

export interface MachineVM {
  name: string;
  state: MachineState;
}

export type MachineState = 'Running' | 'Alarm' | 'Warning';
