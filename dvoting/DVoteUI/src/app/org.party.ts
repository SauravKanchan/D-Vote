import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.party{
   export class Result extends Asset {
      assetId: string;
      bjp: number;
      cong: number;
      aap: number;
      ncp: number;
   }
   export class Voter extends Participant {
      participantId: string;
      firstName: string;
      lastName: string;
      voted: number;
   }
   export class Vote extends Transaction {
      asset: Result;
      voter: Voter;
      newValue: number;
   }
// }
