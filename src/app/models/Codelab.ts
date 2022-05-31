import {CodelabProgress} from "./CodelabProgress";

export interface Codelab {
  codelabName: string;
  progress: CodelabProgress;
  codelabId: number;
  studentId: string | null;

}
